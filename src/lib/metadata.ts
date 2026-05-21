import type { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://voxanalitica.com.br'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Vox Analítica | Inteligência Estratégica e Pesquisa Política',
    template: '%s | Vox Analítica',
  },
  description:
    'Vox Analítica: consultoria de pesquisa política e inteligência estratégica no Nordeste. Metodologia híbrida qualitativa e quantitativa para decisões estratégicas em campanhas, mandatos e gestões públicas.',
  keywords: [
    'pesquisa política',
    'pesquisa eleitoral',
    'inteligência estratégica',
    'consultoria política',
    'pesquisa qualitativa',
    'pesquisa quantitativa',
    'Pernambuco',
    'Paraíba',
    'Rio Grande do Norte',
    'Nordeste',
  ],
  authors: [{ name: 'Vox Analítica' }],
  creator: 'Vox Analítica',
  publisher: 'Vox Analítica',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'Vox Analítica',
    title: 'Vox Analítica | Inteligência Estratégica e Pesquisa Política',
    description:
      'Pesquisa política e inteligência estratégica para campanhas, mandatos e gestões públicas no Nordeste.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Vox Analítica' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vox Analítica | Inteligência Estratégica e Pesquisa Política',
    description:
      'Pesquisa política e inteligência estratégica para campanhas, mandatos e gestões no Nordeste.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
