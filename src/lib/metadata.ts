import { Metadata } from 'next'

const BASE_URL = 'https://voxanalitica.com.br' // TODO: atualizar com domínio real

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Vox Analítica | Pesquisa e Inteligência Política',
    template: '%s | Vox Analítica',
  },
  description:
    'Pesquisa política e inteligência estratégica para marqueteiros, parlamentares e gestores públicos no Nordeste.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'Vox Analítica',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}
