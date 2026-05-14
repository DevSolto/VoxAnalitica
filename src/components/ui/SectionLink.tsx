import Link from 'next/link'

interface SectionLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function SectionLink({ href, children, className = '' }: SectionLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1 text-brand-blue font-medium hover:underline transition-colors ${className}`}
    >
      {children}
    </Link>
  )
}
