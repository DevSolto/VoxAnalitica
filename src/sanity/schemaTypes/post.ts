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
          { title: 'Eleições', value: 'eleicoes' },
          { title: 'Metodologia', value: 'metodologia' },
          { title: 'Análise política', value: 'analise-politica' },
          { title: 'Nordeste', value: 'nordeste' },
        ],
      },
    },
    {
      name: 'resumo',
      title: 'Resumo (aparece nos cards e no SEO)',
      type: 'text',
      rows: 3,
      validation: (R: any) => R.max(160),
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
