import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import CtaButton from '@/components/ui/CtaButton'
import PostContent from '@/components/blog/PostContent'
import { client } from '@/lib/sanity/client'
import { urlFor } from '@/lib/sanity/image'
import { ALL_SLUGS_QUERY, POST_BY_SLUG_QUERY } from '@/lib/sanity/queries'

interface PageProps {
  params: Promise<{ slug: string }>
}

const categoryLabel: Record<string, string> = {
  diagnostico: 'Diagnóstico',
  mandato: 'Mandato',
  desenvolvimento: 'Desenvolvimento',
  'gestao-publica': 'Gestão Pública',
  conectividade: 'Conectividade',
}

const WA_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_ORCAMENTO ??
  'https://wa.me/558192411466?text=Ol%C3%A1%20Vox%20Anal%C3%ADtica!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento'

export const revalidate = 60

export async function generateStaticParams() {
  if (!client) return []
  try {
    const slugs = await client.fetch<{ slug: string }[]>(ALL_SLUGS_QUERY)
    return slugs.filter((s) => s.slug).map((s) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

async function getPost(slug: string) {
  if (!client) return null
  try {
    return await client.fetch(POST_BY_SLUG_QUERY, { slug })
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: 'Artigo não encontrado' }
  const ogUrl = post.capa
    ? urlFor(post.capa)?.width(1200).height(630).fit('crop').auto('format').url()
    : null
  return {
    title: post.seoTitulo || post.titulo,
    description: post.seoDescricao || post.resumo,
    openGraph: {
      title: post.seoTitulo || post.titulo,
      description: post.seoDescricao || post.resumo,
      type: 'article',
      images: ogUrl ? [{ url: ogUrl, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitulo || post.titulo,
      description: post.seoDescricao || post.resumo,
      images: ogUrl ? [ogUrl] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  notFound()

  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const data = post.publicadoEm
    ? new Date(post.publicadoEm).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : null

  return (
    <article>
      {/* Header */}
      <section className="bg-brand-blue-dark pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <Link
              href="/blog"
              className="text-brand-amber text-sm font-medium hover:underline inline-flex items-center gap-1 mb-6"
            >
              ← Voltar para os artigos
            </Link>
            {post.categoria && (
              <SectionLabel className="text-brand-amber block mb-3">
                {categoryLabel[post.categoria] ?? post.categoria}
              </SectionLabel>
            )}
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              {post.titulo}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
              {data && <span>{data}</span>}
              {post.tempoLeitura && (
                <>
                  <span>·</span>
                  <span>{post.tempoLeitura} de leitura</span>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capa */}
      {(() => {
        const capaUrl: string | null = post.capa
          ? urlFor(post.capa)?.width(1280).height(720).fit('crop').auto('format').url() ?? null
          : null
        if (!capaUrl) return null
        return (
          <div className="bg-brand-blue-dark">
            <div className="max-w-4xl mx-auto px-6 pb-12">
              <Image
                src={capaUrl!}
                alt={post.titulo}
                width={1280}
                height={720}
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        )
      })()}

      {/* Conteúdo */}
      <section className="bg-base-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6">
          {post.resumo && (
            <p className="text-xl text-text-primary leading-relaxed mb-10 pb-10 border-b border-base-border">
              {post.resumo}
            </p>
          )}
          <PostContent value={post.conteudo} />

          {/* Tags */}
          {Array.isArray(post.tags) && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-base-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-base-offwhite border border-base-border text-text-secondary text-xs font-medium rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-brand-blue-light py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-2xl lg:text-3xl font-semibold text-brand-blue mb-4">
              Quer aplicar essa leitura no seu cenário?
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed">
              Fale com a Vox Analítica e desenhe uma pesquisa sob medida para o seu território.
            </p>
            <CtaButton href={WA_URL} variant="amber" external>
              Solicitar Orçamento via WhatsApp
            </CtaButton>
          </AnimatedSection>
        </div>
      </section>
    </article>
  )
}
