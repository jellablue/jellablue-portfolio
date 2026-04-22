export default function Footer() {
  return (
    <footer className="px-8 md:px-20 py-10 flex items-center justify-between border-t border-foreground/10">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} jellablue
      </p>
      <div className="flex items-center gap-5">
        <a href="https://github.com/jellablue" target="_blank" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jella-anne-gonzales-455533320/" target="_blank" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}