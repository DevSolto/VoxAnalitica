'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const WA_URL =
  'https://wa.me/558192411466?text=Ol%C3%A1%20Vox%20Anal%C3%ADtica!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex overflow-hidden bg-[#2A3D8F]">
      {/* Left column — text content */}
      <div className="flex items-center w-full md:w-1/2 px-6 py-24 lg:py-32 md:pl-12 lg:pl-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Label */}

          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Pesquisa e inteligência política para decidir antes da concorrência
          </h1>

          <p className="text-lg lg:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl">
            A Vox Analítica ajuda marqueteiros, parlamentares, gestores públicos e lideranças
            regionais a entender o eleitor, medir cenários e transformar dados de campo em
            estratégia. Atuamos com pesquisas quantitativas, qualitativas de rua e diagnósticos
            políticos para campanhas, mandatos e gestões públicas no Nordeste.
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

      {/* Right column — image rectangle */}
      <div className="hidden md:flex md:items-center md:w-1/2 relative py-8 pr-8 pl-4">
        <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden">
          <Image
            src="/hero-olinda1.jpg"
            alt="Pesquisadora nas ladeiras de Olinda — PE"
            fill
            priority
            fetchPriority="high"
            quality={65}
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>
      </div>

      {/* Photo caption */}
      <p className="absolute bottom-4 right-4 text-white/70 text-xs select-none">
        Pesquisadora nas ladeiras de Olinda — PE
      </p>
    </section>
  )
}
