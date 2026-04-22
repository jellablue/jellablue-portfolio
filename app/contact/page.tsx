export default function Contact() {
  return (
    <main className="min-h-screen px-8 md:px-20 pt-36 pb-20 flex flex-col justify-center">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
        Contact
      </p>
      <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
        Let's work<br />
        <span className="italic font-light">together</span>
      </h2>
      <p className="text-muted-foreground max-w-sm mb-10 leading-relaxed">
        I'm currently looking for OJT opportunities. Whether you have a question 
        or just want to say hi, my inbox is always open.
      </p>
      <div className="flex flex-col gap-3 text-sm">
        
         <a href="mailto:your@email.com"
          className="w-fit px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-80 transition-opacity"
        >
          jellagonzales2005@gmail.com
        </a>
        {/* <div className="flex gap-4 mt-2">
          <a href="https://github.com/yourusername" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
        </div> */}
      </div>
    </main>
  )
}