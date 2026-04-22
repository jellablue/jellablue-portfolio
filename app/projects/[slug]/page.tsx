import { client, urlFor } from '@/sanity/client'
import { projectBySlugQuery } from '@/sanity/queries'
import Image from 'next/image'

export const revalidate = 60

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = await client.fetch(projectBySlugQuery, { slug: params.slug })

  if (!project) return <div className="pt-36 px-20">Project not found.</div>

  return (
    <main className="min-h-screen px-8 md:px-20 pt-36 pb-20 max-w-4xl">
      <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
      <p className="text-muted-foreground mb-8 leading-relaxed">{project.description}</p>
      {project.thumbnail && (
        <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={urlFor(project.thumbnail).width(1200).url()}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack?.map((tech: string) => (
          <span key={tech} className="text-sm px-3 py-1 rounded-full bg-white/20 border border-white/20">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium">
            View Live →
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" className="px-6 py-3 rounded-full border border-foreground/20 text-sm">
            GitHub
          </a>
        )}
      </div>
    </main>
  )
}