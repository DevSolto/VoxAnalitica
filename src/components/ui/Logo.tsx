import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  variant?: 'color' | 'white'
  height?: number
  href?: string
  className?: string
}

export default function Logo({
  variant = 'color',
  height = 36,
  href = '/',
  className = '',
}: LogoProps) {
  const src = variant === 'white' ? '/logo-vox-branco.png' : '/logo-vox-escuro.png'

  const content = (
    <Image
      src={src}
      alt="Vox Analítica"
      width={0}
      height={0}
      sizes="100vw"
      style={{ height, width: 'auto' }}
      className={className}
      priority
    />
  )

  if (!href) return content

  return (
    <Link href={href} className="flex items-center flex-shrink-0">
      {content}
    </Link>
  )
}
