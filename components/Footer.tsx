export default function Footer() {
  return (
    <footer className="px-6 md:px-8 py-10 md:py-12 flex items-center justify-between border-t border-foreground/10">
        <p className="font-sans text-base text-muted">
          © {new Date().getFullYear()} jellablue
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/jellablue" target="_blank" className="font-sans text-base text-muted hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jella-anne-gonzales-455533320/" target="_blank" className="font-sans text-base text-muted hover:text-foreground transition-colors">
            LinkedIn
          </a>
          </div>
    </footer>
  )
}