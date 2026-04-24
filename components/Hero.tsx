import Link from 'next/link'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 md:px-6 py-20 md:py-28">
      
      <div className="mx-auto w-full max-w-xl">
        <Reveal delay={0.2}>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Hi, I'm Jella!
        </h1>
        </Reveal>
        <Reveal delay={0.4}>
        <p className="font-sans text-base md:text-lg text-muted leading-relaxed max-w-xl mb-10">
          I sprinkle magic on React, Next.js, and CSS to build snappy, inclusive web interfaces. I'm truly obsessed with where beautiful design meets powerful, clean code.
        </p>
        </Reveal>
        <Reveal delay={0.6}>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="https://mail.google.com/mail/?view=cm&to=jellagonzales2005@gmail.com&subject="
            target="_blank"
            className="inline-block px-6 py-3 rounded-full bg-pill text-background text-sm md:text-base font-sans tracking-wide hover:opacity-80 transition-opacity"
          >
             Let' talk!
          </Link>
          <a
            href="/gonzales-jella-resume.pdf"
            target="_blank"
            className="inline-block px-6 py-3 rounded-full border border-pill text-sm md:text-base text-pill-text font-sans tracking-wide hover:opacity-60 transition-opacity"
          >
            My Resume
          </a>
        </div>
        </Reveal>
      </div>    
    </section>
  )
}