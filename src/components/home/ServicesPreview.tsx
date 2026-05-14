import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionLink from '@/components/ui/SectionLink'

const services = [
  {
    nome: 'Pesquisa Quantitativa',
    descricao:
      'Mede o tamanho do fenômeno. Intenção de voto, aprovação, rejeição — com margem de erro e amostra representativa.',
  },
  {
    nome: 'Pesquisa Qualitativa de Rua',
    descricao:
      'Explica o que está por trás do número. Entrevistas em profundidade em feiras, praças e ruas — mais ágil que focus group.',
  },
]

export default function ServicesPreview() {
  return (
    <section id="servicos" className="bg-base-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel className="mb-3 block">Nossos Serviços</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mb-12">
            O que fazemos e como fazemos
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {services.map((s, i) => (
            <AnimatedSection key={s.nome} delay={i * 0.1}>
              <div className="p-8 border border-base-border rounded-lg hover:border-brand-amber transition-colors">
                <h3 className="text-xl font-semibold text-brand-blue mb-3">{s.nome}</h3>
                <p className="text-base text-text-secondary leading-relaxed">{s.descricao}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <p className="text-sm text-text-muted italic mb-6">
            A quantitativa diz o que e quanto. A qualitativa diz por quê e como. Juntas, entregam
            um diagnóstico completo.
          </p>
          <SectionLink href="/metodologia">Ver metodologia completa →</SectionLink>
        </AnimatedSection>
      </div>
    </section>
  )
}
