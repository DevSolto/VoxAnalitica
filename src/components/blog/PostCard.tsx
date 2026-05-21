import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity/image'

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

const categoryLabel: Record<string, string> = {
  diagnostico: 'Diagnóstico',
  mandato: 'Mandato',
  desenvolvimento: 'Desenvolvimento',
  'gestao-publica': 'Gestão Pública',
  conectividade: 'Conectividade',
}

export function PostCard({ post }: { post: Post }) {
  const data = post.publicadoEm
    ? new Date(post.publicadoEm).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : null

  const capaUrl = post.capa ? urlFor(post.capa)?.width(800).height(450).fit('crop').auto('format').url() : null

  return (
    <Link href={`/blog/${post.slug.current}`} className="group block">
      <article className="bg-white rounded-lg overflow-hidden h-full flex flex-col border border-base-border hover:border-brand-amber transition-colors">
        {capaUrl && (
          <div className="aspect-video overflow-hidden relative">
            <Image
              src={capaUrl}
              alt={post.titulo}
              width={800}
              height={450}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            {post.categoria && (
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-amber">
                {categoryLabel[post.categoria] ?? post.categoria}
              </span>
            )}
            {post.tempoLeitura && (
              <span className="text-xs text-text-muted">{post.tempoLeitura}</span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-brand-blue mb-2 leading-snug group-hover:text-brand-blue-dark transition-colors">
            {post.titulo}
          </h3>
          {post.resumo && (
            <p className="text-sm text-text-secondary leading-relaxed flex-1 line-clamp-3">
              {post.resumo}
            </p>
          )}
          {data && (
            <p className="text-xs text-text-muted mt-4">{data}</p>
          )}
        </div>
      </article>
    </Link>
  )
}
