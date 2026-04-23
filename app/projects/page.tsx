import { getProjects } from '@/sanity/queries'
import Image from 'next/image';


export const revalidate = 60

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section className="px-8 pt-16 pb-24">
      <h2 className="font-serif text-4xl mb-10">Projects</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="group cursor-pointer">
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
            <p className="font-sans text-sm font-medium">{project.name}</p>
            {project.subtitle && (
              <p className="font-sans text-xs text-muted">{project.subtitle}</p>
            )}
            {project.date && (
              <p className="font-sans text-[11px] text-muted/80 mt-1">
                {project.date}
              </p>
            )}
            <p className="font-sans text-xs text-muted mt-1">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}