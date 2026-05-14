import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página não encontrada',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-brand-amber/20 leading-none mb-4">404</p>
        <h1 className="text-3xl font-semibold text-brand-blue mb-4">Página não encontrada</h1>
        <p className="text-text-secondary leading-relaxed mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm rounded transition-colors"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  )
}
