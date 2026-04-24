import Reveal from '@/components/Reveal'

export default function Contact() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 md:px-8 py-20 md:py-28">
      <div className="mx-auto w-full max-w-xl">
        <Reveal delay={0.1}>
          <h2 className="font-serif text-5xl md:text-6xl mb-6">
            Let's work together!
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-sans text-base md:text-lg text-muted leading-relaxed max-w-lg mb-10">
            I’m currently open to new collaborations. Whether you have a curious question or just want to chat, my digital door is always open!
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-wrap items-center gap-4">
           <a 
              href="https://github.com/jellablue"
              target="_blank"
              className="px-6 py-3 rounded-full bg-pill text-background text-sm md:text-base font-sans tracking-wide hover:opacity-80 transition-opacity"
            >
              View Github
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=jellagonzales2005@gmail.com&subject="
              target="_blank"
              className="inline-block px-6 py-3 rounded-full border border-pill border-subtle text-pill-text text-sm md:text-base font-sans tracking-wide hover:opacity-60 transition-opacity"
            >
              Email me!
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}