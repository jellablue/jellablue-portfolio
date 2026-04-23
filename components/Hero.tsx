import Link from 'next/link'

export default function Hero() {
  return (
    <section className="px-8 max-w-2xl">
      <h1 className="font-serif text-4xl md:text-5xl mb-5">
        Hi, I'm Jella!
      </h1>
      <p className="font-sans text-sm text-muted leading-relaxed max-w-sm mb-8">
        I sprinkle magic on React, Next.js, and CSS to build snappy, inclusive web interfaces. I'm truly obsessed with where beautiful design meets powerful, clean code.
      </p>
      <div className="flex items-center gap-3">
        <Link
          href="/projects"
          className="inline-block px-5 py-2 rounded-full bg-pill-gradient text-main text-xs font-sans tracking-wide hover:opacity-80 transition-opacity"
        >
          View Projects
        </Link>
        <a
          href="/gonzales-jella-resume.pdf"
          target="_blank"
          className="inline-block px-5 py-2 rounded-full border border-pill text-xs text-pill-text font-sans tracking-wide hover:opacity-60 transition-opacity"
        >
          Download CV
        </a>
      </div>
    </section>
  )
}