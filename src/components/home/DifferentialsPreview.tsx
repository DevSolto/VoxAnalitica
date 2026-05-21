import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import CtaButton from '@/components/ui/CtaButton'

const diferenciais = [
  {
    numero: '01',
    titulo: 'Expertise Regional Real',
    descricao:
      'Conhecemos o Nordeste por dentro: dinâmicas locais, vocabulário do eleitor, tensões entre municípios.',
  },
  {
    numero: '02',
    titulo: 'Liderança em Campo',
    descricao:
      'A Vox Analítica é liderada por Antônio Souto, fundador da empresa e especialista em pesquisas qualitativas e quantitativas aplicadas à política municipal e regional. Sua experiência combina análise de dados, leitura territorial e vivência direta em campanhas, mandatos e gestões públicas no Nordeste.',
  },
  {
    numero: '03',
    titulo: 'Estrutura Enxuta',
    descricao:
      'Sem custos de estrutura corporativa. Preço competitivo e prazo menor, sem abrir mão de metodologia sólida.',
  },
  {
    numero: '04',
    titulo: 'Dados verificáveis e entrega transparente',
    descricao:
      'A Vox trabalha com controle de coleta, registro de rotas, supervisão de campo e organização dos dados em planilhas estruturadas. Ao final do projeto, o cliente recebe o relatório analítico e a base tabulada, permitindo conferir os resultados e entender como as conclusões foram construídas. Materiais sensíveis, como gravações individuais e fichas completas de campo, são preservados para proteger a privacidade dos entrevistados e a integridade metodológica da pesquisa.',
  },
  {
    numero: '05',
    titulo: 'Foco em Pesquisa',
    descricao:
      'Não somos agência de publicidade. Pesquisa eleitoral é o núcleo do que fazemos — todos os dias.',
  },
]

const WA_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_ORCAMENTO ??
  'https://wa.me/558192411466?text=Ol%C3%A1%20Vox%20Anal%C3%ADtica!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento'

export default function DifferentialsPreview() {
  return (
    <section className="bg-base-offwhite py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel className="mb-3 block">Diferenciais</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mb-12">
            Por que escolher a Vox Analítica
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {diferenciais.map((d, i) => (
            <AnimatedSection key={d.numero} delay={i * 0.08}>
              <div className="p-8 bg-white rounded-lg h-full">
                <span className="text-3xl font-bold text-brand-amber">{d.numero}</span>
                <h3 className="text-lg font-semibold text-brand-blue mt-3 mb-2">{d.titulo}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{d.descricao}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="bg-white border border-base-border rounded-lg p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-text-secondary">
              Quer entender o que uma pesquisa bem feita pode revelar sobre o seu cenário?
            </p>
            <CtaButton href={WA_URL} external className="flex-shrink-0">
              Fale com a gente
            </CtaButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
