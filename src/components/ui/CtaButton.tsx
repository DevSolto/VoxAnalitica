import Link from 'next/link'

interface CtaButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'amber' | 'white' | 'outline'
  external?: boolean
  className?: string
}

export default function CtaButton({
  href,
  children,
  variant = 'amber',
  external = false,
  className = '',
}: CtaButtonProps) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded font-semibold text-sm tracking-wide transition-colors duration-200'

  const variants = {
    amber: 'bg-brand-amber hover:bg-brand-amber-light text-white',
    white: 'bg-white hover:bg-gray-100 text-brand-blue-dark',
    outline:
      'border-2 border-brand-amber text-brand-amber hover:bg-brand-amber hover:text-white',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
