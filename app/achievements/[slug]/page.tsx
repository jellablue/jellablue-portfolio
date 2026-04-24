import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/client'
import { achievementBySlugQuery, achievementSlugsQuery } from '@/sanity/queries'
import { Project } from '@/types/Project'
import { Achievement } from '@/types/Achievement'
import Reveal from '@/components/Reveal'

export const dynamic = 'force-dynamic'
//export const revalidate = 60

export default async function AchievementDetail({ params }: { params: Promise<{ slug: string }> }) {
  let feat: Achievement | null = null
const { slug } = await Promise.resolve(params)

  try {
    feat = await client.fetch(achievementBySlugQuery, { slug })
    console.log('slug received:', slug)
    console.log('Fetched project:', feat)
  } catch (err) {
    console.error('Failed to fetch project:', err)
  }
  if (!feat) {
    return (
      <div className="px-6 md:px-8 py-24 max-w-6xl mx-auto">
        <p className="font-sans text-base text-muted">Achievement not found.</p>
        <Link href="/projects" className="font-sans text-base underline mt-4 inline-block">
          ← Back to Feats
        </Link>
      </div>
    )
  }

  return (
    <article className="px-6 md:px-8 py-20 md:py-24 max-w-6xl mx-auto w-full">
      <Reveal delay={0.05}>
        <Link
          href="/"
          className="font-sans text-sm text-muted hover:text-foreground transition-colors mb-10 inline-block"
        >
          ← Back to Home
        </Link>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="font-serif text-5xl md:text-6xl mb-4">{feat.title}</h1>
      </Reveal>
      {feat.date && (
        <Reveal delay={0.15}>
          <p className="font-sans text-base text-muted mb-6">{feat.date}</p>
        </Reveal>
      )}
      <Reveal delay={0.2}>
        <p className="font-sans text-base md:text-lg text-muted mb-10 leading-relaxed max-w-4xl">{feat.description}</p>
      </Reveal>


      {feat.thumbnail && (
        <Reveal delay={0.25}>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10">
            <Image src={feat.thumbnail.url} alt={feat.thumbnail.alt || feat.title} fill className="object-cover" />
          </div>
        </Reveal>
      )}

      {feat.contributions && feat.contributions.length > 0 && (
        <Reveal delay={0.3}>
          <div className="mb-10">
            <p className="font-sans text-sm tracking-widest text-muted mb-4">MY CONTRIBUTIONS</p>
            <ul className="space-y-3">
              {feat.contributions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pill shrink-0" />
                  <p className="font-sans text-base md:text-lg leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}

      {feat.images && feat.images.length > 0 && (
        <Reveal delay={0.35}>
          <div className="mb-10">
            <p className="font-sans text-sm tracking-widest text-muted mb-4">SCREENSHOTS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {feat.images
                .filter((img) => img?.url)
                .map((img, i) => (
                  <div key={i} className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={img.url}
                      alt={img?.alt || `${feat.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </Reveal>
      )}

    </article>
  )
}