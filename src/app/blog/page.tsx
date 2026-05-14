import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Análises e conteúdos sobre pesquisa política e cenário eleitoral no Nordeste.',
}

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-text-muted text-sm font-mono">blog — em construção</p>
      </section>
    </div>
  )
}
