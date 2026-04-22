import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 pt-20">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
        Frontend Developer · Available for OJT
      </p>
      <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
        Hi, I'm<br />
        <span className="italic font-light">Jella</span>
      </h1>
      <p className="text-base text-muted-foreground max-w-md mb-10 leading-relaxed">
        I craft clean, performant, and accessible web interfaces using React, 
        Next.js, and modern CSS. Passionate about the intersection of design and code.
      </p>
      <div className="flex items-center gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity"
        >
          View Projects
        </Link>
        
        <a  href="/gonzales-jella-resume.pdf"
          target="_blank"
          className="px-6 py-3 rounded-full border border-foreground/20 text-sm hover:border-foreground/50 transition-colors"
        >
          Download CV
        </a>
      </div>
    </section>
  )
}