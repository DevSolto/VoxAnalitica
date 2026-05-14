import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import CtaButton from '@/components/ui/CtaButton'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça a Vox Analítica — consultoria especializada em pesquisa política e inteligência estratégica para o Nordeste.',
}

const valores = ['Confiança e transparência', 'Dedicação ao cliente', 'Agilidade nas entregas', 'Preço justo']

const competencias = [
  'Pesquisa Qualitativa',
  'Análise Quantitativa',
  'Inteligência Política',
  'Estratégia Eleitoral',
  'Gestão Pública',
  'Comunicação Política',
]

const metodologiaHibrida = {
  qualitativa: {
    titulo: 'Pesquisa Qualitativa',
    descricao:
      'Conversas autênticas nas ruas, bairros e comunidades para capturar insights profundos sobre percepções, sentimentos e necessidades reais do eleitor.',
    metodos: ['Entrevistas em profundidade', 'Grupos focais', 'Observação etnográfica', 'Análise de narrativas'],
  },
  quantitativa: {
    titulo: 'Pesquisa Quantitativa',
    descricao:
      'Análise estatística rigorosa de dados para validar hipóteses, identificar tendências e gerar recomendações baseadas em evidências numéricas robustas.',
    metodos: ['Surveys estruturadas', 'Análise estatística', 'Modelagem de dados', 'Relatórios executivos'],
  },
}

const presencaGeografica = [
  { estado: 'Pernambuco', cidades: ['Olinda', 'Recife', 'São José do Egito'] },
  { estado: 'Paraíba', cidades: ['Campina Grande', 'João Pessoa'] },
  { estado: 'Rio Grande do Norte', cidades: ['Via equipe PB/RN'] },
]

export default function SobrePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-blue-dark pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel className="text-brand-amber">SOBRE NÓS</SectionLabel>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mt-4 mb-6 max-w-3xl">
              Nossa História de Inteligência Estratégica
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Nascida no Nordeste, a Vox Analítica combina pesquisa de campo, leitura territorial, análise de dados e
              inteligência estratégica para ajudar campanhas, mandatos e gestões públicas a tomar decisões mais seguras.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Missão */}
      <section className="bg-base-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>NOSSA MISSÃO</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mt-4 mb-8 max-w-2xl">
              O que nos move
            </h2>
            <blockquote className="text-xl text-text-primary leading-relaxed max-w-3xl border-l-4 border-brand-amber pl-6 mb-10">
              Transformar escuta de rua em inteligência estratégica que capacita marqueteiros, estrategistas de
              campanhas, parlamentares e gestores públicos a tomar decisões mais seguras e informadas, baseadas em dados
              reais e insights profundos.
            </blockquote>
            <div className="flex flex-wrap gap-3">
              {valores.map((v) => (
                <span
                  key={v}
                  className="px-4 py-2 bg-brand-blue-light text-brand-blue text-sm font-medium rounded-full"
                >
                  {v}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fundador */}
      <section className="bg-base-offwhite py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>LIDERANÇA & EXPERTISE</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mt-4 mb-10">
              Quem está por trás da Vox
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-base-border max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-brand-blue-dark flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  AS
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-blue">Antônio Souto</h3>
                  <p className="text-brand-amber text-sm font-medium">Fundador &amp; Diretor</p>
                </div>
              </div>
              <p className="text-text-primary leading-relaxed mb-6">
                Com mais de 15 anos de experiência em pesquisa política e inteligência estratégica, Antônio Souto é
                especialista em transformar dados qualitativos e quantitativos em recomendações acionáveis para
                campanhas eleitorais, gestores públicos e parlamentares.
              </p>
              <div className="flex flex-wrap gap-2">
                {competencias.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 bg-base-offwhite border border-base-border text-text-secondary text-xs font-medium rounded"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Metodologia Híbrida */}
      <section className="bg-brand-blue-light py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>METODOLOGIA</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mt-4 mb-10">
              Nossa Metodologia Híbrida
            </h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-6">
            {[metodologiaHibrida.qualitativa, metodologiaHibrida.quantitativa].map((m, i) => (
              <AnimatedSection key={m.titulo} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-base-border h-full">
                  <h3 className="text-xl font-semibold text-brand-blue mb-3">{m.titulo}</h3>
                  <p className="text-text-secondary leading-relaxed mb-6">{m.descricao}</p>
                  <ul className="space-y-2">
                    {m.metodos.map((met) => (
                      <li key={met} className="flex items-center gap-2 text-text-primary text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-amber flex-shrink-0" />
                        {met}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Presença Geográfica */}
      <section className="bg-base-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>ONDE ATUAMOS</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mt-4 mb-10">
              Presença Geográfica
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6">
            {presencaGeografica.map((p, i) => (
              <AnimatedSection key={p.estado} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-base-border bg-base-offwhite">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center mb-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-brand-blue mb-2">{p.estado}</h3>
                  <ul className="space-y-1">
                    {p.cidades.map((c) => (
                      <li key={c} className="text-text-secondary text-sm">{c}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <p className="text-text-muted text-sm mt-6">
              CNPJ: 52.726.286/0001-90 &nbsp;|&nbsp; Sede: Olinda, Pernambuco
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue-dark py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
              Conheça Nossa Metodologia
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Quer entender como transformamos escuta de rua em decisões estratégicas? Fale com a nossa equipe.
            </p>
            <CtaButton
              href={process.env.NEXT_PUBLIC_WHATSAPP_ORCAMENTO || 'https://wa.me/558192411466?text=Olá%20Vox%20Analítica!%20Gostaria%20de%20solicitar%20um%20orçamento'}
              variant="amber"
              external
            >
              Solicitar Orçamento via WhatsApp
            </CtaButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
