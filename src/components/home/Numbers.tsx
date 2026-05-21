import AnimatedSection from '@/components/ui/AnimatedSection'

// TODO: atualizar com dados reais do cliente
const blocos = [
  { numero: '15+', label: 'Anos de experiência' },
  { numero: 'PE · PB · RN', label: 'Atuação no Nordeste' },
  { numero: 'Quali + Quanti', label: 'Metodologia híbrida' },
  { numero: 'Dados auditáveis', label: 'Entrega transparente' },
]

export default function Numbers() {
  return (
    <section className="bg-base-offwhite py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {blocos.map((b, i) => (
            <AnimatedSection key={b.label} delay={i * 0.1}>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-brand-amber mb-2">
                  {b.numero}
                </div>
                <div className="text-sm text-text-secondary leading-relaxed">{b.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
