import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const segments = [
  {
    perfil: 'Marqueteiros e Estrategistas de Campanha',
    descricao:
      'Que precisam de dado real antes de definir posicionamento, mensagem e alocação de mídia.',
  },
  {
    perfil: 'Parlamentares e Assessorias de Mandato',
    descricao:
      'Que precisam entender o território, identificar demandas e orientar emendas com critério.',
  },
  {
    perfil: 'Gestores Públicos',
    descricao:
      'Que precisam avaliar como a população percebe serviços e tomar decisão com respaldo de dado.',
  },
  {
    perfil: 'Partidos e Lideranças Regionais',
    descricao:
      'Que precisam mapear cenários municipais e monitorar pré-candidaturas.',
  },
]

export default function AudiencePreview() {
  return (
    <section className="bg-brand-blue-light py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel className="mb-3 block">Quem Atendemos</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mb-12">
            Para quem a Vox Analítica trabalha
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {segments.map((s, i) => (
            <AnimatedSection key={s.perfil} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-lg h-full">
                <h3 className="text-base font-semibold text-brand-blue mb-3">{s.perfil}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.descricao}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-sm text-text-secondary italic">
            Se o seu trabalho depende de saber o que as pessoas pensam antes de agir — a Vox
            Analítica foi feita para isso.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
