import { getProjects } from '@/sanity/queries'
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal'


export const revalidate = 60

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 md:px-8 py-20 md:py-28">
      <Reveal delay={0.1}>
        <h2 className="font-serif text-5xl md:text-6xl mb-12">Projects</h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <Reveal key={project._id} delay={0.15 + index * 0.06}>
            <Link
              href={`/projects/${project.slug}`}
              className="group cursor-pointer block"
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-3">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <p className="font-sans text-base md:text-lg font-medium">{project.name}</p>
              {project.subtitle && (
                <p className="font-sans text-sm text-muted">{project.subtitle}</p>
              )}
              {project.date && (
                <p className="font-sans text-xs md:text-sm text-muted/80 mt-1">
                  {project.date}
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