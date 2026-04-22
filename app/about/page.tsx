const skills = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  'Tools':    ['Git', 'Figma', 'Sanity.io', 'Vercel'],
  'Learning': ['Framer Motion', 'Three.js'],
}

export default function About() {
  return (
    <main className="min-h-screen px-8 md:px-20 pt-36 pb-20">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
        About
      </p>
      <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-12">
        Frontend developer<br />
        <span className="italic font-light">based in the Philippines</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl">
        <div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a Computer Science student currently seeking OJT opportunities 
            in frontend development. I enjoy building things that live on the web — 
            from landing pages to full-stack applications.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I care about writing clean code, creating smooth user experiences, 
            and continuously improving my craft.
          </p>
        </div>
        <div className="space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-full bg-white/20 border border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}