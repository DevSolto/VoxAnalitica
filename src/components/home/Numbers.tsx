import AnimatedSection from '@/components/ui/AnimatedSection'

const stats = [
  { value: '15+', label: 'anos de experiência em pesquisa política' },
  { value: 'PE · PB · RN', label: 'estados com atuação direta no Nordeste' },
  { value: 'Quali + Quanti', label: 'metodologia híbrida integrada' },
  { value: '100%', label: 'dados auditáveis entregues com o relatório' },
]

export default function Numbers() {
  return (
    <section className="bg-base-offwhite py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.value} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-brand-amber mb-2">{stat.value}</p>
                <p className="text-sm text-text-secondary leading-snug">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
