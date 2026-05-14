import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import CtaButton from '@/components/ui/CtaButton'

export const metadata: Metadata = {
  title: 'Metodologia',
  description:
    'Conheça a metodologia da Vox Analítica: processo rigoroso em 5 etapas, 6 pilares de qualidade e coleta de campo supervisionada no Nordeste.',
}

const etapas = [
  {
    numero: '01',
    nome: 'Briefing Estratégico',
    descricao:
      'Antes de qualquer pergunta ir a campo, a gente precisa entender o que você quer saber — e por quê. Nessa etapa mapeamos o cenário, os atores envolvidos, as hipóteses que você já tem e as dúvidas que ainda não foram verbalizadas. Um briefing bem feito evita retrabalho e garante que a pesquisa responda o que realmente importa.',
  },
  {
    numero: '02',
    nome: 'Desenho Metodológico',
    descricao:
      'Com o objetivo claro, definimos o desenho da pesquisa: tipo de abordagem (quantitativa, qualitativa ou combinada), território de coleta, perfil do público-alvo, tamanho da amostra e roteiro de perguntas. Cada escolha metodológica tem uma razão.',
  },
  {
    numero: '03',
    nome: 'Coleta em Campo',
    descricao:
      'A coleta é feita com controle por rota, diversidade de perfil e supervisão presencial ou remota. Monitoramos o andamento em tempo real e intervimos quando necessário. Dado ruim coletado em campo não tem como ser consertado na análise — por isso o controle começa aqui.',
  },
  {
    numero: '04',
    nome: 'Análise e Interpretação',
    descricao:
      'Com os dados em mãos, fazemos a tabulação, os cruzamentos relevantes e a leitura qualitativa das respostas. O objetivo não é apenas descrever o que apareceu — é identificar padrões, tensões e o que está por baixo das respostas mais óbvias. É nessa etapa que o dado vira diagnóstico.',
  },
  {
    numero: '05',
    nome: 'Entrega Estratégica',
    descricao:
      'O relatório final é escrito para ser usado, não arquivado. Linguagem direta, visual organizado, com diagnóstico do cenário, riscos identificados, oportunidades e recomendações práticas. Se precisar apresentar para uma equipe ou liderança, o formato já está pronto para isso.',
  },
]

const pilares = [
  {
    nome: 'Roteamento Estruturado',
    resumo: 'É o "mapa de campo" da pesquisa: orienta onde, como e com quem conversar.',
    descricao:
      'Antes da equipe ir a campo, a Vox define um roteiro claro de aplicação, com perguntas organizadas, critérios de abordagem, áreas de coleta e perfis prioritários. Isso evita improviso excessivo e reduz o risco de entrevistas concentradas em um único bairro, grupo ou tipo de eleitor.',
  },
  {
    nome: 'Auditoria Simultânea',
    resumo: 'É o controle em tempo real para corrigir falhas antes que elas virem problema no relatório.',
    descricao:
      'A auditoria simultânea é o acompanhamento da pesquisa enquanto ela ainda está acontecendo, e não apenas depois que o campo termina. Permite identificar problemas rapidamente — entrevistas muito curtas, respostas repetidas, concentração geográfica — e corrigir a rota durante a execução.',
  },
  {
    nome: 'Sigilo Absoluto',
    resumo: 'O entrevistado é protegido, o cliente é protegido e a estratégia não circula fora do ambiente autorizado.',
    descricao:
      'A Vox trata as informações coletadas com sigilo e responsabilidade. Dados de entrevistados, áudios, respostas, percepções políticas e materiais estratégicos do cliente não são expostos, compartilhados ou utilizados fora da finalidade da pesquisa.',
  },
  {
    nome: 'Gravação de Áudio',
    resumo: 'O áudio ajuda a comprovar a entrevista e preserva a riqueza da fala original do entrevistado.',
    descricao:
      'Sempre que a metodologia permitir e houver autorização adequada, a gravação de áudio funciona como uma camada adicional de controle de qualidade. Ela permite verificar se a entrevista foi realmente realizada e se o conteúdo registrado corresponde ao que foi dito.',
  },
  {
    nome: 'GPS e Timestamp',
    resumo: 'GPS mostra onde a entrevista aconteceu. Timestamp mostra quando e por quanto tempo ela ocorreu.',
    descricao:
      'O registro de GPS e horário de aplicação dá rastreabilidade à coleta. Com a localização, é possível verificar se a entrevista foi realizada na área prevista. Com o horário, é possível avaliar duração, ritmo de aplicação e possíveis inconsistências.',
  },
  {
    nome: 'Supervisão Direta',
    resumo: 'É a presença da coordenação garantindo que a pesquisa siga o método e mantenha padrão de qualidade.',
    descricao:
      'A supervisão direta é o acompanhamento humano da equipe de campo. A coordenação orienta entrevistadores, tira dúvidas, acompanha produtividade, observa padrões de resposta e verifica se a metodologia está sendo seguida. Tecnologia sozinha não garante qualidade.',
  },
]

export default function MetodologiaPage() {
  return (
    <div>
      {/* Hero / Intro */}
      <section className="bg-brand-blue-dark pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel className="text-brand-amber">METODOLOGIA</SectionLabel>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mt-4 mb-6 max-w-3xl">
              Como funciona nossa metodologia
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Cada pesquisa da Vox Analítica passa por um processo estruturado — do briefing à entrega. Não existe
              atalho metodológico quando o dado vai orientar decisões estratégicas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 5 Etapas */}
      <section className="bg-base-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>PROCESSO</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mt-4 mb-4">
              Do briefing à entrega: 5 etapas
            </h2>
            <p className="text-text-secondary mb-12 max-w-xl leading-relaxed">
              Cada etapa tem prazo definido. Você acompanha o processo, não só o resultado.
            </p>
          </AnimatedSection>
          <div className="space-y-6">
            {etapas.map((etapa, i) => (
              <AnimatedSection key={etapa.numero} delay={i * 0.08}>
                <div className="flex gap-6 p-8 rounded-2xl border border-base-border bg-base-white hover:border-brand-blue/30 transition-colors">
                  <span className="text-4xl font-bold text-brand-amber/30 flex-shrink-0 leading-none mt-1 w-12">
                    {etapa.numero}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-blue mb-3">{etapa.nome}</h3>
                    <p className="text-text-primary leading-relaxed">{etapa.descricao}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Pilares de Qualidade */}
      <section className="bg-base-offwhite py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>GARANTIA DE QUALIDADE</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mt-4 mb-4">
              Controle, rastreabilidade e confiabilidade
            </h2>
            <p className="text-text-secondary mb-12 max-w-2xl leading-relaxed">
              Na Vox Analítica, qualidade não é apenas revisar o relatório no final. O controle começa no planejamento,
              passa pela coleta em campo e continua na análise dos dados.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pilares.map((pilar, i) => (
              <AnimatedSection key={pilar.nome} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 border border-base-border h-full flex flex-col">
                  <div className="w-8 h-1 bg-brand-amber rounded mb-4" />
                  <h3 className="text-lg font-semibold text-brand-blue mb-2">{pilar.nome}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3 flex-1">{pilar.descricao}</p>
                  <p className="text-brand-amber text-xs font-medium italic">{pilar.resumo}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <p className="text-text-muted text-sm mt-10 max-w-2xl leading-relaxed">
              Combinando planejamento, tecnologia, supervisão e análise humana, a Vox Analítica transforma a pesquisa
              em um processo controlado do início ao fim.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Nota Qualitativa */}
      <section className="bg-brand-blue-light py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>PESQUISA QUALITATIVA</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mt-4 mb-6">
              Onde a opinião pública se forma
            </h2>
            <blockquote className="text-xl text-text-primary leading-relaxed max-w-3xl border-l-4 border-brand-amber pl-6">
              A Vox Analítica realiza pesquisas qualitativas de rua com entrevistas em profundidade em ambientes reais
              de convivência: bairros, feiras, praças, ruas, comunidades, filas, pontos comerciais e espaços onde a
              opinião pública se forma de maneira espontânea.
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue-dark py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
              Pronto para começar?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Conte o seu cenário e vamos desenhar juntos a pesquisa que você precisa.
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
