import Image from 'next/image'

const skills = {
  frontend: ['React.js', 'Next.js', 'TailwindCSS', 'Typescript', 'JavaScript'],
  backend: ['Laravel', 'Node.js', 'Express.js', 'C#'],
  tools:    ['Git', 'Figma', 'Sanity Studio'],
}

export default function About() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 md:px-8 py-20 md:py-28">
      <div className="mx-auto flex flex-col md:flex-row md:items-center gap-14 lg:gap-20 max-w-5xl">
        <div className="flex-1">
          <h2 className="font-serif text-5xl md:text-6xl mb-7">About</h2>
          <p className="font-sans text-base md:text-lg text-muted leading-relaxed mb-5 max-w-2xl">
            I’m a Computer Science student and frontend enthusiast who loves creating digital homes. I thrive on building everything from cozy landing pages to complex, full-stack applications that users truly love.
          </p>
          {/* <p className="font-sans text-sm text-muted leading-relaxed mb-8">
            I care about writing clean code, creating smooth user experiences,
            and continuously improving my craft.
          </p> */}
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="mb-3">
              <p className="font-sans text-sm tracking-widest text-muted mb-3 uppercase">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="font-sans text-sm px-4 py-1.5 rounded-full bg-pill-gradient text-main">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Photo */}
        <div className="w-52 h-72 md:w-64 md:h-80 relative rounded-xl overflow-hidden shrink-0">
          <Image src="/photo.jpg" alt="Jella" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}