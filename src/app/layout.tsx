import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { defaultMetadata } from '@/lib/metadata'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = defaultMetadata

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Vox Analítica',
  description: 'Pesquisa política e inteligência estratégica no Nordeste',
  url: 'https://voxanalitica.com.br',
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
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
