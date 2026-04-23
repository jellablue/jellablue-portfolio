import Image from 'next/image'

const skills = {
  frontend: ['React.js', 'Next.js', 'TailwindCSS', 'Typescript', 'JavaScript'],
  backend: ['Laravel', 'Node.js', 'Express.js', 'C#'],
  tools:    ['Git', 'Figma', 'Sanity Studio'],
}

export default function About() {
  return (
    <section className="px-8 pt-16 max-w-2xl justify-center items-center">
      <div className="flex flex-col md:flex-row md:items-center gap-12 max-w-3xl">
        <div className="flex-1">
          <h2 className="font-serif text-4xl mb-6">About</h2>
          <p className="font-sans text-sm text-muted leading-relaxed mb-4">
            I'm a Computer Science student currently seeking OJT opportunities
            in frontend development. I enjoy building things that live on the
            web — from landing pages to full-stack applications.
          </p>
          {/* <p className="font-sans text-sm text-muted leading-relaxed mb-8">
            I care about writing clean code, creating smooth user experiences,
            and continuously improving my craft.
          </p> */}
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="mb-5">
              <p className="font-sans text-xs tracking-widest text-muted mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="font-sans text-xs px-4 py-1 rounded-full bg-pill-gradient text-main">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Photo */}
        <div className="w-40 h-52 md:w-48 md:h-64 relative rounded-xl overflow-hidden shrink-0">
          <Image src="/photo.jpg" alt="Jella" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}