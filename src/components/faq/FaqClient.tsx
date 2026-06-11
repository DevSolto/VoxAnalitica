'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { abas, type Pergunta } from '@/components/faq/faqData'

function AccordionItem({ pergunta, resposta }: Pergunta) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-base-border last:border-0">
      <h3 className="m-0">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left gap-4 group"
          aria-expanded={open}
        >
          <span className="text-text-primary font-medium group-hover:text-brand-blue transition-colors leading-snug">
            {pergunta}
          </span>
          <span
            className={`flex-shrink-0 w-6 h-6 rounded-full border border-base-border flex items-center justify-center text-text-muted group-hover:border-brand-blue group-hover:text-brand-blue transition-all ${
              open ? 'rotate-180 border-brand-blue text-brand-blue' : ''
            }`}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </h3>
      <div className={open ? 'pb-5 pr-10' : 'hidden'}>
        <p className="text-text-secondary leading-relaxed">{resposta}</p>
      </div>
    </div>
  )
}

export default function FaqClient() {
  const [abaAtiva, setAbaAtiva] = useState(0)

  return (
    <div>
      {/* Tabs */}
      <div role="tablist" aria-label="Categorias de perguntas" className="flex gap-2 mb-10 flex-wrap">
        {abas.map((aba, i) => (
          <button
            key={aba.nome}
            role="tab"
            id={`faq-tab-${i}`}
            aria-selected={abaAtiva === i}
            aria-controls={`faq-panel-${i}`}
            onClick={() => setAbaAtiva(i)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              abaAtiva === i
                ? 'bg-brand-blue text-white'
                : 'bg-base-offwhite text-text-secondary hover:bg-brand-blue-light hover:text-brand-blue border border-base-border'
            }`}
          >
            {aba.nome}
          </button>
        ))}
      </div>

      {/* Accordion — todas as abas ficam no DOM para indexação; só a ativa é exibida */}
      {abas.map((aba, i) => (
        <div
          key={aba.nome}
          role="tabpanel"
          id={`faq-panel-${i}`}
          aria-labelledby={`faq-tab-${i}`}
          className={abaAtiva === i ? '' : 'hidden'}
        >
          <AnimatedSection key={`${aba.nome}-${abaAtiva === i}`}>
            <h2 className="sr-only">{aba.nome}</h2>
            <div className="bg-white rounded-2xl border border-base-border px-8 divide-y-0">
              {aba.perguntas.map((item) => (
                <AccordionItem key={item.pergunta} {...item} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      ))}
    </div>
  )
}
