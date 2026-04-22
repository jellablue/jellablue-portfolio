import { getProjects } from '@/sanity/queries'
import ProjectCard from '@/components/ProjectCard'

export const revalidate = 60

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen px-8 md:px-20 pt-36 pb-20">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
        Work
      </p>
      <h2 className="text-5xl md:text-6xl font-bold mb-16">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </main>
  )
}