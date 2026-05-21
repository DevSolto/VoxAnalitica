'use client'

import { useMemo, useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { PostCard } from '@/components/blog/PostCard'

interface Post {
  _id: string
  titulo: string
  slug: { current: string }
  categoria?: string
  resumo?: string
  tempoLeitura?: string
  publicadoEm?: string
  capa?: any
}

const categorias = [
  { value: 'todos', label: 'Todos' },
  { value: 'diagnostico', label: 'Diagnóstico' },
  { value: 'mandato', label: 'Mandato' },
  { value: 'desenvolvimento', label: 'Desenvolvimento' },
  { value: 'gestao-publica', label: 'Gestão Pública' },
  { value: 'conectividade', label: 'Conectividade' },
]

export default function BlogList({ posts }: { posts: Post[] }) {
  const [filtro, setFiltro] = useState('todos')

  const filtrados = useMemo(() => {
    if (filtro === 'todos') return posts
    return posts.filter((p) => p.categoria === filtro)
  }, [filtro, posts])

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary mb-4">
          Artigos em breve. Configure o Sanity CMS para publicar conteúdo.
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* Filtro */}
      <div className="flex gap-2 mb-10 flex-wrap">
        {categorias.map((c) => (
          <button
            key={c.value}
            onClick={() => setFiltro(c.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filtro === c.value
                ? 'bg-brand-blue text-white'
                : 'bg-base-offwhite text-text-secondary hover:bg-brand-blue-light hover:text-brand-blue border border-base-border'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtrados.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrados.map((post, i) => (
            <AnimatedSection key={post._id} delay={i * 0.05}>
              <PostCard post={post} />
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <p className="text-text-secondary text-sm py-12">
          Nenhum artigo nesta categoria ainda.
        </p>
      )}
    </div>
  )
}
