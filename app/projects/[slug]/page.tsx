import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/client'
import { projectBySlugQuery, projectSlugsQuery } from '@/sanity/queries'
import { Project } from '@/types/Project'

export const dynamic = 'force-dynamic'
export const revalidate = 60

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  let project: Project | null = null

  try {
    project = await client.fetch(projectBySlugQuery, { slug: params.slug })
  } catch (err) {
    console.error('Failed to fetch project:', err)
  }
  if (!project) {
    return (
      <div className="px-6 md:px-8 py-24 max-w-6xl mx-auto">
        <p className="font-sans text-base text-muted">Project not found.</p>
        <Link href="/projects" className="font-sans text-base underline mt-4 inline-block">
          ← Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <article className="px-6 md:px-8 py-20 md:py-24 max-w-6xl mx-auto w-full">
      <Link
        href="/projects"
        className="font-sans text-sm text-muted hover:text-foreground transition-colors mb-10 inline-block"
      >
        ← Back to Projects
      </Link>

      <h1 className="font-serif text-5xl md:text-6xl mb-4">{project.name}</h1>
      {project.subtitle && <p className="font-sans text-lg text-muted mb-2">{project.subtitle}</p>}
      {project.date && <p className="font-sans text-base text-muted mb-6">{project.date}</p>}
      <p className="font-sans text-base md:text-lg text-muted mb-10 leading-relaxed max-w-4xl">{project.description}</p>

      <div className="flex flex-wrap gap-8 mb-12 border-y border-border py-6">
        {project.role && (
          <div>
            <p className="font-sans text-sm tracking-widest text-muted mb-1">ROLE</p>
            <p className="font-sans text-base">{project.role}</p>
          </div>
        )}
        {project.duration && (
          <div>
            <p className="font-sans text-sm tracking-widest text-muted mb-1">DURATION</p>
            <p className="font-sans text-base">{project.duration}</p>
          </div>
        )}
        {project.techStack && project.techStack.length > 0 && (
          <div>
            <p className="font-sans text-sm tracking-widest text-muted mb-1">TECH STACK</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="font-sans text-sm px-3 py-1.5 rounded-full bg-pill text-pill-text">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {project.image && (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10">
          <Image src={project.image} alt={project.name} fill className="object-cover" />
        </div>
      )}

      {project.contributions && project.contributions.length > 0 && (
        <div className="mb-10">
          <p className="font-sans text-sm tracking-widest text-muted mb-4">MY CONTRIBUTIONS</p>
          <ul className="space-y-3">
            {project.contributions.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pill-text shrink-0" />
                <p className="font-sans text-base md:text-lg leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.body && project.body.length > 0 && (
        <div className="prose prose-sm max-w-none font-sans mb-10">
          <PortableText value={project.body} />
        </div>
      )}

      {project.images && project.images.length > 0 && (
        <div className="mb-10">
          <p className="font-sans text-sm tracking-widest text-muted mb-4">SCREENSHOTS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images
              .filter((img) => img?.url)
              .map((img, i) => (
                <div key={i} className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={img.url}
                    alt={img?.alt || `${project.name} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
          </div>
        </div>
      )}

      <div className="flex gap-3 pt-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pill-gradient px-6 py-3 rounded-full text-sm md:text-base font-sans tracking-wide hover:opacity-80 transition-opacity"
          >
            View Live →
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full border border-border text-sm md:text-base font-sans tracking-wide hover:opacity-60 transition-opacity"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}