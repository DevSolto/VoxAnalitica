import AnimatedSection from '@/components/ui/AnimatedSection'
import CtaButton from '@/components/ui/CtaButton'

const WA_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_ORCAMENTO ??
  'https://wa.me/558192411466?text=Ol%C3%A1%20Vox%20Anal%C3%ADtica!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento'

export default function CtaBanner() {
  return (
    <section className="bg-brand-blue-dark py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Transforme escuta popular em decisão estratégica
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-10">
              Com a Vox Analítica, dados de campo, leitura territorial e análise política se
              transformam em orientação prática para campanhas, mandatos e gestões públicas.
            </p>
            <CtaButton href={WA_URL} external variant="amber">
              Solicitar Orçamento via WhatsApp
            </CtaButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
