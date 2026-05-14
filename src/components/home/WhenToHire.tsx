import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const casos = [
  'Antes de lançar uma candidatura',
  'Antes de definir uma mensagem de campanha',
  'Para avaliar a imagem de uma gestão',
  'Para orientar ações de mandato',
  'Para identificar demandas por região',
  'Para entender rejeição, aprovação e recall',
  'Para testar narrativas, ataques e defesas',
  'Para monitorar adversários e temas locais',
]

export default function WhenToHire() {
  return (
    <section className="bg-base-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel className="mb-3 block">Quando Contratar</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mb-12">
            Situações onde pesquisa e inteligência política são decisivas
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4">
          {casos.map((caso, i) => (
            <AnimatedSection key={caso} delay={i * 0.06}>
              <div className="flex items-start gap-3 py-4 border-b border-base-border last:border-0">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-amber/10 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-brand-amber"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-text-primary text-sm leading-relaxed">{caso}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
