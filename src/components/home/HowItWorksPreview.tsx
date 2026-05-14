import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionLink from '@/components/ui/SectionLink'

const etapas = [
  { numero: '01', nome: 'Briefing Estratégico', resumo: 'Mapeamos seus objetivos, hipóteses e o que realmente precisa ser respondido' },
  { numero: '02', nome: 'Desenho Metodológico', resumo: 'Definimos tipo de pesquisa, território, amostra e roteiro de perguntas' },
  { numero: '03', nome: 'Coleta em Campo', resumo: 'Controle por rota, diversidade de perfil e supervisão em tempo real' },
  { numero: '04', nome: 'Análise e Interpretação', resumo: 'Tabulação, cruzamentos e leitura qualitativa — o dado vira diagnóstico' },
  { numero: '05', nome: 'Entrega Estratégica', resumo: 'Relatório escrito para ser usado: diagnóstico, riscos e recomendações práticas' },
]

export default function HowItWorksPreview() {
  return (
    <section className="bg-base-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel className="mb-3 block">Metodologia</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mb-12">
            Como funciona nossa metodologia
          </h2>
        </AnimatedSection>

        <div className="space-y-4 mb-10">
          {etapas.map((e, i) => (
            <AnimatedSection key={e.numero} delay={i * 0.08}>
              <div className="flex gap-6 items-start py-5 border-b border-base-border last:border-0">
                <span className="text-2xl font-bold text-brand-amber tabular-nums flex-shrink-0 w-10">
                  {e.numero}
                </span>
                <div>
                  <p className="font-semibold text-brand-blue mb-0.5">{e.nome}</p>
                  <p className="text-sm text-text-secondary">{e.resumo}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-sm text-text-muted italic mb-6">
            Cada etapa tem prazo definido. Você acompanha o processo, não só o resultado.
          </p>
          <SectionLink href="/metodologia">Ver metodologia completa →</SectionLink>
        </AnimatedSection>
      </div>
    </section>
  )
}
