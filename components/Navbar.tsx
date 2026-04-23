'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/about',    label: 'about' },
  { href: '/projects', label: 'projects' },
  { href: '/contact',  label: 'connect' },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="flex items-center justify-between px-10 md:px-14 py-10 md:py-12">
      <Link href="/" style={{ fontFamily: 'var(--font-display)' }} className="font-display text-4xl md:text-4xl leading-none">
        jellablue
      </Link>
      <ul className="flex items-center gap-6 md:gap-8">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`font-sans text-xl tracking-wide transition-opacity hover:opacity-60 ${
                pathname === href ? 'opacity-100' : 'opacity-80'
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}