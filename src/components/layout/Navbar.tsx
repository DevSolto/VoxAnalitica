'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Metodologia', href: '/metodologia' },
  { label: 'Logística', href: '/logistica' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'FAQ', href: '/faq' },
]

const WA_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_ORCAMENTO ??
  'https://wa.me/558192411466?text=Ol%C3%A1%20Vox%20Anal%C3%ADtica!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-base-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <span
              className={`text-xl font-bold tracking-tight transition-colors ${
                scrolled ? 'text-brand-blue' : 'text-white'
              }`}
            >
              Vox Analítica
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-amber ${
                  scrolled ? 'text-text-secondary' : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 bg-brand-amber hover:bg-brand-amber-light text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
            >
              Solicitar Orçamento
            </a>

            {/* Hamburger */}
            <button
              className={`lg:hidden p-2 transition-colors ${
                scrolled ? 'text-text-primary' : 'text-white'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-current transition-transform origin-center ${
                    menuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-opacity ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-transform origin-center ${
                    menuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-base-border py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-text-secondary hover:text-brand-amber hover:bg-base-offwhite px-4 py-3 text-sm font-medium rounded transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-3 border-t border-base-border mt-2">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-amber hover:bg-brand-amber-light text-white text-sm font-semibold px-5 py-3 rounded transition-colors w-full"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
