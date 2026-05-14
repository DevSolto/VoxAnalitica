'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const WA_URL =
  'https://wa.me/558192411466?text=Ol%C3%A1%20Vox%20Anal%C3%ADtica!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-blue-dark overflow-hidden">
      {/* Decorative grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Label */}
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-amber mb-6">
            Pesquisa Política · PE · PB · RN
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Pesquisa e inteligência política para entender o eleitor antes da concorrência
          </h1>

          <p className="text-lg lg:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl">
            Para marqueteiros, estratégistas de campanha, parlamentares e gestores públicos que
            precisam transformar escuta popular, dados de campo e análise estratégica em decisões
            mais seguras.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-amber text-white font-semibold rounded-lg hover:bg-brand-amber-light transition-colors text-base"
            >
              Solicitar Orçamento
            </a>
            <Link
              href="#servicos"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              Conhecer os Serviços ↓
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
