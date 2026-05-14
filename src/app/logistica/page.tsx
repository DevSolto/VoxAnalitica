import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import CtaButton from '@/components/ui/CtaButton'

export const metadata: Metadata = {
  title: 'Logística',
  description:
    'Equipes descentralizadas, protocolo unificado e coordenação integrada: a logística da Vox Analítica no Nordeste.',
}

const equipes = [
  {
    nome: 'Equipe Pernambuco',
    base: 'São José do Egito',
    cobertura: 'São José do Egito até Araripe e região do Sertão Pernambucano',
    especialidades: ['Pesquisa quantiativas.'],
    supervisao: 'Coordenação direta em campo + supervisão remota do escritório central',
  },
  {
    nome: 'Equipe Paraíba',
    base: 'Campina Grande',
    cobertura: 'Toda a Paraíba, incluindo região metropolitana de João Pessoa e Campina Grande',
    especialidades: ['Pesquisa quantiativas.'],
    supervisao: 'Coordenação integrada com protocolo unificado + auditoria contínua',
  },
  {
    nome: 'Equipe de Pesquisa Qualitativa',
    base: 'Escritório Central — Olinda, Pernambuco',
    cobertura: 'Coordenação de pesquisas qualitativas em toda a região de atuação (PE, PB)',
    especialidades: [
      'Entrevistas em profundidade',
      'Grupos focais estratégicos',
      'Análise de narrativas',
      'Insights comportamentais',
    ],
    supervisao: 'Gestão centralizada de todas as pesquisas qualitativas, análise integrada e recomendações estratégicas',
  },
]

const protocolo = [
  {
    nome: 'Padrão de Qualidade',
    descricao:
      'Ambas as equipes seguem rigorosamente o mesmo protocolo de coleta, validação e processamento de dados, garantindo consistência em toda a região de atuação.',
  },
  {
    nome: 'Treinamento Contínuo',
    descricao:
      'Equipes recebem treinamento padronizado, certificação periódica e atualização de metodologias, mantendo expertise em nível máximo independente da localização.',
  },
  {
    nome: 'Supervisão Dupla',
    descricao:
      'Supervisão simultânea em campo (coordenador local) e do escritório central (gestor de qualidade), garantindo conformidade e excelência operacional.',
  },
]

const coordenacao = [
  {
    passo: 1,
    nome: 'Briefing Centralizado',
    descricao:
      'Todos os projetos recebem briefing unificado, independente da equipe que executará. Alinhamento de objetivos, metodologia e prazos.',
  },
  {
    passo: 2,
    nome: 'Execução em Campo',
    descricao:
      'Equipe regional executa pesquisa com supervisão direta em campo e monitoramento remoto. Todos os dados são validados em tempo real.',
  },
  {
    passo: 3,
    nome: 'Análise Integrada',
    descricao:
      'Dados de ambas as equipes são consolidados no escritório central para análise comparativa e geração de insights estratégicos.',
  },
  {
    passo: 4,
    nome: 'Relatório Final',
    descricao:
      'Relatório consolidado com dados auditados, análises estratégicas e recomendações acionáveis. Qualidade garantida em 100% dos projetos.',
  },
]

export default function LogisticaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-blue-dark pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel className="text-brand-amber">LOGÍSTICA</SectionLabel>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mt-4 mb-6 max-w-3xl">
              Nossa Logística Descentralizada
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Equipes estrategicamente posicionadas no Nordeste, mantendo excelência operacional e protocolo unificado
              em cada região.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cobertura Geográfica — 3 equipes */}
      <section className="bg-base-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>COBERTURA GEOGRÁFICA</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mt-4 mb-10">
              Três equipes, um padrão
            </h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {equipes.map((equipe, i) => (
              <AnimatedSection key={equipe.nome} delay={i * 0.1}>
                <div className="bg-base-offwhite rounded-2xl p-8 border border-base-border h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-brand-blue mb-1">{equipe.nome}</h3>
                  <p className="text-brand-amber text-sm font-medium mb-4">Base: {equipe.base}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">{equipe.cobertura}</p>
                  <div className="mb-5 flex-1">
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                      Especialidades
                    </p>
                    <ul className="space-y-1">
                      {equipe.especialidades.map((e) => (
                        <li key={e} className="flex items-start gap-2 text-text-primary text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-amber flex-shrink-0 mt-1.5" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed border-t border-base-border pt-4">
                    {equipe.supervisao}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Protocolo Unificado */}
      <section className="bg-base-offwhite py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>PROTOCOLO</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mt-4 mb-10">
              Protocolo Unificado
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6">
            {protocolo.map((p, i) => (
              <AnimatedSection key={p.nome} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-base-border h-full">
                  <div className="w-8 h-1 bg-brand-amber rounded mb-5" />
                  <h3 className="text-lg font-semibold text-brand-blue mb-3">{p.nome}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{p.descricao}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coordenação Integrada */}
      <section className="bg-brand-blue-light py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>COORDENAÇÃO</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mt-4 mb-10">
              Coordenação Integrada
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coordenacao.map((etapa, i) => (
              <AnimatedSection key={etapa.passo} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-base-border h-full">
                  <span className="text-5xl font-bold text-brand-amber/20 leading-none block mb-3">
                    {String(etapa.passo).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-semibold text-brand-blue mb-2">{etapa.nome}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{etapa.descricao}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue-dark py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
              Dados que você pode defender publicamente
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Transforme escuta de rua em inteligência estratégica com a Vox Analítica.
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
