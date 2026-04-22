'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: '/', label: 'Home'},
    { href: '/about', label: 'About'},
    { href: '/projects', label: 'Projects'},
    { href: '/contact', label: 'Contact'},
]

export default function Navbar() {
    const pathname = usePathname();

    return(
       <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
      <Link href="/" className="text-sm font-semibold tracking-tight text-foreground">
        yourname  {/* replace with your name */}
      </Link>
      <ul className="flex items-center gap-6">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`text-sm transition-colors hover:text-foreground ${
                pathname === href ? 'text-foreground font-medium' : 'text-muted-foreground'
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