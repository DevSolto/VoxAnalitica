import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import BlogList from '@/components/blog/BlogList'
import { client } from '@/lib/sanity/client'
import { ALL_POSTS_QUERY } from '@/lib/sanity/queries'

export const metadata: Metadata = {
  title: 'Artigos',
  description:
    'Diagnósticos, análises e leituras territoriais da Vox Analítica sobre o Nordeste brasileiro.',
}

export const revalidate = 60

export default async function BlogPage() {
  notFound()

  let posts: any[] = []
  try {
    if (client) {
      posts = await client.fetch(ALL_POSTS_QUERY)
    }
  } catch {
    // Sanity ainda não configurado
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-blue-dark pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel className="text-brand-amber">ARTIGOS</SectionLabel>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mt-4 mb-6 max-w-3xl">
              Diagnósticos e análises do Nordeste
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Textos sobre pesquisa política, leitura territorial, comportamento do eleitor e o
              cotidiano de campanhas, mandatos e gestões no Nordeste.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Lista de artigos com filtro */}
      <section className="bg-base-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <BlogList posts={posts} />
        </div>
      </section>
    </div>
  )
}
