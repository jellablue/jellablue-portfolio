import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/client'
import { projectBySlugQuery, projectSlugsQuery } from '@/sanity/queries'
import { Project } from '@/types/Project'

export const revalidate = 60

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(projectSlugsQuery)
  return slugs.map(({ slug }) => ({ slug }))
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project: Project = await client.fetch(projectBySlugQuery, { slug })

  if (!project) {
    return (
      <div className="px-8 py-24 max-w-3xl mx-auto">
        <p className="font-sans text-sm text-muted">Project not found.</p>
        <Link href="/projects" className="font-sans text-sm underline mt-4 inline-block">
          ← Back to Projects
        </Link>
      </div>
    )
  }

  const detailedContributionItems = project.detailedContributions
    ?.split(/\r?\n/)
    .map((line) => line.replace(/^[-*•]\s*/, '').trim())
    .filter(Boolean)

  const contributionItems =
    detailedContributionItems && detailedContributionItems.length > 0
      ? detailedContributionItems
      : project.contributions

  return (
    <article className="px-8 py-16 max-w-3xl mx-auto w-full">
      <Link
        href="/projects"
        className="font-sans text-xs text-muted hover:text-foreground transition-colors mb-10 inline-block"
      >
        ← Back to Projects
      </Link>

      <h1 className="font-serif text-4xl md:text-5xl mb-3">{project.name}</h1>
      {project.subtitle && <p className="font-sans text-base text-muted mb-2">{project.subtitle}</p>}
      {project.date && <p className="font-sans text-sm text-muted mb-6">{project.date}</p>}
      <p className="font-sans text-sm text-muted mb-8 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-6 mb-10 border-y border-border py-5">
        {project.role && (
          <div>
            <p className="font-sans text-xs tracking-widest text-muted mb-1">ROLE</p>
            <p className="font-sans text-sm">{project.role}</p>
          </div>
        )}
        {project.duration && (
          <div>
            <p className="font-sans text-xs tracking-widest text-muted mb-1">DURATION</p>
            <p className="font-sans text-sm">{project.duration}</p>
          </div>
        )}
        {project.techStack && project.techStack.length > 0 && (
          <div>
            <p className="font-sans text-xs tracking-widest text-muted mb-1">TECH STACK</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="font-sans text-xs px-3 py-1 rounded-full bg-pill text-pill-text">
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

      {contributionItems && contributionItems.length > 0 && (
        <div className="mb-10">
          <p className="font-sans text-xs tracking-widest text-muted mb-4">MY CONTRIBUTIONS</p>
          <ul className="space-y-3">
            {contributionItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pill-text shrink-0" />
                <p className="font-sans text-sm leading-relaxed">{item}</p>
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
          <p className="font-sans text-xs tracking-widest text-muted mb-4">SCREENSHOTS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img, i) => (
              <div key={i} className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={img?.url}
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
            className="inline-block bg-pill-gradient px-5 py-2 rounded-full text-xs font-sans tracking-wide hover:opacity-80 transition-opacity"
          >
            View Live →
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-full border border-border text-xs font-sans tracking-wide hover:opacity-60 transition-opacity"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}