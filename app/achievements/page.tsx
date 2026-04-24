import { getAchievements } from '@/sanity/queries'
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal'


export const revalidate = 60

export default async function Achievements() {
  const feats = await getAchievements();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 md:px-8 py-20 md:py-28">
      <Reveal delay={0.1}>
        <h2 className="font-serif text-5xl md:text-6xl mb-12">Feats</h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {feats.map((feat, index) => (
          <Reveal key={feat._id} delay={0.15 + index * 0.06}>
            <Link
              href={`/achievements/${feat.slug}`}
              className="group cursor-pointer block"
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-3">
                {feat.thumbnail && (
                  <Image
                    src={feat.thumbnail.url}
                    alt={feat.thumbnail.alt || feat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <p className="font-sans text-base md:text-lg font-medium">{feat.title}</p>
              {feat.date && (
                <p className="font-sans text-xs md:text-sm text-muted/80 mt-1">
                  {feat.date}
                </p>
              )}
              {/* <p className="font-sans text-xs text-muted mt-1">{project.description}</p> */}
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}