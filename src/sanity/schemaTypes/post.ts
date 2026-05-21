export default {
  name: 'post',
  title: 'Artigo',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (R: any) => R.required(),
    },
    {
      name: 'slug',
      title: 'URL (slug)',
      type: 'slug',
      options: { source: 'titulo' },
      validation: (R: any) => R.required(),
    },
    {
      name: 'capa',
      title: 'Imagem de capa',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'categoria',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Diagnóstico', value: 'diagnostico' },
          { title: 'Mandato', value: 'mandato' },
          { title: 'Desenvolvimento', value: 'desenvolvimento' },
          { title: 'Gestão Pública', value: 'gestao-publica' },
          { title: 'Conectividade', value: 'conectividade' },
        ],
      },
    },
    {
      name: 'resumo',
      title: 'Resumo (aparece nos cards e no SEO)',
      type: 'text',
      rows: 3,
      validation: (R: any) => R.max(200),
    },
    {
      name: 'tempoLeitura',
      title: 'Tempo de leitura (ex: "7 min")',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'conteudo',
      title: 'Conteúdo',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    {
      name: 'publicadoEm',
      title: 'Data de publicação',
      type: 'datetime',
    },
    {
      name: 'seoTitulo',
      title: 'Título SEO (opcional)',
      type: 'string',
      description: 'Se vazio, usa o título do artigo',
    },
    {
      name: 'seoDescricao',
      title: 'Descrição SEO (opcional)',
      type: 'text',
      rows: 2,
      description: 'Se vazio, usa o resumo',
    },
  ],
  preview: {
    select: { title: 'titulo', media: 'capa' },
  },
}
