import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import CtaButton from '@/components/ui/CtaButton'
import FaqClient from '@/components/faq/FaqClient'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Perguntas frequentes sobre os serviços da Vox Analítica — respostas para marqueteiros, parlamentares e gestores públicos.',
}

export default function FaqPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-brand-blue-dark pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel className="text-brand-amber">DÚVIDAS FREQUENTES</SectionLabel>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mt-4 mb-6 max-w-2xl">
              Dúvidas Frequentes
            </h1>
            <p className="text-lg text-white/80 max-w-xl leading-relaxed">
              Respostas rápidas e específicas para marqueteiros, parlamentares e gestores públicos.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ interativo */}
      <section className="bg-base-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <FaqClient />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue-light py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <AnimatedSection>
            <SectionLabel>FALE CONOSCO</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mt-4 mb-4">
              Ainda tem dúvidas?
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-8 leading-relaxed">
              Fale diretamente com nossa equipe pelo WhatsApp. Respondemos o que você precisar antes de qualquer
              contratação.
            </p>
            <CtaButton
              href={process.env.NEXT_PUBLIC_WHATSAPP_ORCAMENTO || 'https://wa.me/558192411466?text=Olá%20Vox%20Analítica!%20Gostaria%20de%20solicitar%20um%20orçamento'}
              variant="amber"
              external
            >
              Conversar no WhatsApp
            </CtaButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
