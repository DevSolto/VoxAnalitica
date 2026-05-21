import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

// TODO: adicionar números reais quando o cliente fornecer
const itens = [
  {
    titulo: 'Municípios analisados no Nordeste',
    descricao:
      'Trabalho de campo em cidades de diferentes portes em PE, PB e RN — capitais, médias e interior.',
  },
  {
    titulo: 'Pesquisas quantitativas e qualitativas em PE, PB e RN',
    descricao:
      'Surveys com amostra representativa e entrevistas em profundidade em rua, feiras e praças.',
  },
  {
    titulo: 'Atuação em cenários eleitorais, avaliação de gestão, mandatos e pré-campanhas',
    descricao:
      'Diagnósticos para cada fase do ciclo político — antes, durante e depois da campanha.',
  },
  {
    titulo: 'Relatórios usados por marqueteiros, parlamentares e equipes de comunicação',
    descricao:
      'Material entregue para subsidiar decisão de posicionamento, mensagem e alocação de recursos.',
  },
]

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-brand-amber flex-shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function ProofBlock() {
  return (
    <section className="bg-base-offwhite py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel className="mb-3 block">Nossa atuação</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mb-12">
            Como a Vox Analítica trabalha no Nordeste
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {itens.map((item, i) => (
            <AnimatedSection key={item.titulo} delay={i * 0.08}>
              <div className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <h3 className="text-base font-semibold text-brand-blue mb-1">{item.titulo}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.descricao}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
