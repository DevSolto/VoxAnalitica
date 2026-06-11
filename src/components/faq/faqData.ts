export interface Pergunta {
  pergunta: string
  resposta: string
}

export interface Aba {
  nome: string
  perguntas: Pergunta[]
}

export const abas: Aba[] = [
  {
    nome: 'Marqueteiros',
    perguntas: [
      {
        pergunta: 'Como a pesquisa qualitativa ajuda na criação de mensagens?',
        resposta:
          'A pesquisa qualitativa de rua captura o vocabulário real do eleitor — como ele descreve um problema, que palavras usa, que emoções aciona quando fala de saúde, segurança ou política. Esse material é a base para mensagens que soam verdadeiras, porque são construídas com as próprias palavras da população. Antes de definir um conceito criativo ou gravar um material de campanha, você sabe o que ressoa e o que cria resistência.',
      },
      {
        pergunta: 'Qual é o tempo médio para receber os resultados da pesquisa?',
        resposta:
          'Pesquisa quantitativa: entrega em até 72 horas após o campo. Pesquisa qualitativa de rua: entrega em até 10 dias. Os prazos são definidos no briefing e respeitados — atrasos comprometem decisões estratégicas, e sabemos disso.',
      },
      {
        pergunta: 'Como vocês segmentam o público para testes de mensagem?',
        resposta:
          'O segmento é definido no briefing com base nos objetivos da campanha. Trabalhamos com recortes por território (zona, bairro, município), perfil socioeconômico, faixa etária e escolaridade — que são as variáveis que mais impactam percepção política no Nordeste. O roteiro de entrevistas é calibrado para cada segmento, evitando que uma mensagem seja testada com quem não é o público-alvo.',
      },
      {
        pergunta: 'Posso usar os dados para diferentes campanhas?',
        resposta:
          'Sim. O relatório é entregue com análise interpretativa e os dados brutos são de posse do cliente. Você pode usá-los internamente para qualquer finalidade estratégica: briefar equipe de marketing, orientar produção de conteúdo digital, preparar material de rádio ou TV. Cada pesquisa permanece estritamente confidencial — não compartilhamos dados entre clientes.',
      },
      {
        pergunta: 'Qual é o diferencial da Vox em relação a outras empresas de pesquisa?',
        resposta:
          'Somos especializados em pesquisa política no Nordeste — essa é a única área em que trabalhamos. Nosso principal diferencial é a pesquisa qualitativa de rua com entrevistas em profundidade: mais ágil e acessível que o focus group tradicional, com a mesma riqueza de material. Operamos com controle de campo por rota, auditoria durante a coleta, gravação de áudio e sigilo absoluto. Por não termos estrutura corporativa pesada, o custo é competitivo para clientes de qualquer porte.',
      },
    ],
  },
  {
    nome: 'Parlamentares',
    perguntas: [
      {
        pergunta: 'Como o monitoramento de opinião ajuda a manter conexão com a base?',
        resposta:
          'O mandato que não escuta perde a percepção do que está acontecendo no território. A pesquisa de opinião feita ao longo do mandato — não só em ano eleitoral — entrega um diagnóstico real de como o trabalho do parlamentar está sendo visto, quais demandas não estão sendo atendidas e onde há risco de erosão de base. Com esse dado, a assessoria pode ajustar comunicação, priorizar pautas e demonstrar resultados com evidência antes que o problema vire crise.',
      },
      {
        pergunta: 'Com que frequência devo fazer pesquisas de opinião sobre o mandato?',
        resposta:
          'Depende da demanda e do momento político de cada cliente. Não existe uma frequência padrão — o que existe é uma conversa franca e direta entre nossa diretoria e o cliente para entender o que faz sentido para cada mandato, território e objetivo. Essa definição acontece antes de qualquer contratação.',
      },
      {
        pergunta: 'Quais temas costumam ser pesquisados no diagnóstico de mandato?',
        resposta:
          'Os temas são definidos no briefing conforme a realidade do território e os objetivos do parlamentar. Os mais frequentes incluem: reconhecimento do nome e das ações do mandato, avaliação da atuação por área (saúde, infraestrutura, educação, segurança), demandas prioritárias por município ou bairro, percepção de adversários e aliados, e clima político local. O roteiro é construído caso a caso — não usamos questionários padrão.',
      },
      {
        pergunta: 'Como vocês garantem a confidencialidade dos dados políticos?',
        resposta:
          'Todos os materiais produzidos — áudios, transcrições, fichas de campo e relatório final — são de uso exclusivo do cliente. Nenhuma informação é compartilhada com terceiros, veículos de imprensa ou outros clientes. Em pesquisas políticas, o sigilo tem peso adicional: tratamos estratégias de campanha, percepção de lideranças e cenários eleitorais como informação sensível desde a coleta até o arquivamento final.',
      },
      {
        pergunta: 'Posso usar os resultados para comunicação com a imprensa?',
        resposta:
          'Depende do que foi acordado no início do projeto. Se a pesquisa for de uso interno e estratégico, o cliente decide o que divulga e o que mantém reservado. Se o objetivo for publicar resultados para a imprensa — como nota de aprovação do mandato — definimos isso antes do campo e formatamos o relatório para esse fim. A Vox nunca divulga dados de clientes sem autorização expressa.',
      },
    ],
  },
  {
    nome: 'Gestores Públicos',
    perguntas: [
      {
        pergunta: 'Como a pesquisa de satisfação ajuda na tomada de decisão da gestão pública?',
        resposta:
          'O gestor que decide baseado em demanda política — reclamações de vereadores, percepção de gabinete — está trabalhando com dado filtrado e parcial. A pesquisa de satisfação entrega o que a população de fato pensa sobre os serviços prestados: o que funciona, o que falta, o que incomoda e por quê. Com isso, a alocação de recursos e as prioridades de comunicação passam a ter respaldo concreto — não só intuição política.',
      },
      {
        pergunta: 'Qual é a metodologia utilizada para medir satisfação com serviços públicos?',
        resposta:
          'Combinamos pesquisa quantitativa e qualitativa conforme o objetivo. A quantitativa mede o nível de satisfação com margem de erro e permite comparar por zona, bairro ou perfil demográfico. A qualitativa — feita com entrevistas de rua — explica por que a satisfação está num determinado patamar: o que a população reclama, como descreve o problema, que expectativas tem. Os dois instrumentos juntos entregam diagnóstico completo, não só um número.',
      },
      {
        pergunta: 'Com que frequência uma prefeitura deve fazer pesquisas de satisfação?',
        resposta:
          'A periodicidade depende da demanda e da realidade de cada gestão. Não trabalhamos com pacotes fechados — o que fazemos é uma conversa franca e direta entre nossa diretoria e o cliente para entender o que faz sentido para cada município, projeto e momento político. Essa definição acontece antes de qualquer contratação.',
      },
      {
        pergunta: 'Como os resultados são entregues e apresentados para a equipe de governo?',
        resposta:
          'O relatório é escrito para ser apresentado, não só lido. Além do documento completo com análise e dados tabulados, entregamos um sumário executivo formatado para reunião de equipe ou secretariado: linguagem direta, gráficos organizados e recomendações priorizadas por área. Se necessário, podemos participar da apresentação presencial ou por videoconferência para contextualizar os achados e responder dúvidas da equipe.',
      },
      {
        pergunta: 'A prefeitura pode divulgar os resultados da pesquisa para a população?',
        resposta:
          'Sim, e em muitos casos é estratégico fazer isso. Divulgar que a gestão ouviu a população — e o que foi feito a partir disso — reforça a imagem de governo participativo e comprometido com resultados. Nesse caso, preparamos uma versão pública do relatório com linguagem acessível e formato adequado para comunicação institucional, redes sociais ou imprensa. O que não pode ser divulgado são cruzamentos individuais que permitam identificar respondentes.',
      },
    ],
  },
]
