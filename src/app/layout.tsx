import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { defaultMetadata } from '@/lib/metadata'
import SiteShell from '@/components/layout/SiteShell'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = defaultMetadata

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://voxanalitica.com.br'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Vox Analítica',
  description: 'Pesquisa política e inteligência estratégica no Nordeste',
  url: SITE_URL,
  telephone: '+55-81-9241-1466',
  email: 'voxanalitica1@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Olinda',
    addressRegion: 'PE',
    addressCountry: 'BR',
  },
  areaServed: ['Pernambuco', 'Paraíba', 'Rio Grande do Norte'],
  founder: { '@type': 'Person', name: 'Antônio Souto' },
  sameAs: [
    'https://www.instagram.com/voxanalitica.br/',
    'https://www.facebook.com/profile.php?id=61579455456761',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
