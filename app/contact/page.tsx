export default function Contact() {
  return (
    <section className="px-8 pt-16 pb-24 max-w-2xl">
      <h2 className="font-serif text-4xl md:text-5xl mb-5">
        Let's work together!
      </h2>
      <p className="font-sans text-sm text-muted leading-relaxed max-w-xs mb-8">
        I'm currently looking for OJT opportunities. Whether you have a question
        or just want to say hi, my inbox is always open.
      </p>
      <div className="flex items-center gap-3">
       <a 
          href="https://github.com/yourusername"
          target="_blank"
          className="px-5 py-2 rounded-full bg-pill text-pill text-xs font-sans tracking-wide hover:opacity-80 transition-opacity"
        >
          View Github
        </a>
        <a
          href="mailto:your@email.com"
          className="px-5 py-2 rounded-full border border-subtle text-xs font-sans tracking-wide hover:opacity-60 transition-opacity"
        >
          Email me
        </a>
      </div>
    </section>
  )
}