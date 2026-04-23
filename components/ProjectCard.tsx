import Image from 'next/image'
import { Project } from '@/types/Project'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
        {project.subtitle && (
          <p className="text-sm text-muted-foreground mb-1">{project.subtitle}</p>
        )}
        {project.date && (
          <p className="text-xs text-muted-foreground/80 mb-3">
            {project.date}
          </p>
        )}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack?.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-white/20 border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Live Site →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}