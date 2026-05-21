export const ALL_POSTS_QUERY = `
  *[_type == "post"] | order(publicadoEm desc) {
    _id, titulo, slug, categoria, resumo, tempoLeitura, tags, publicadoEm, capa
  }
`

export const LATEST_POSTS_QUERY = `
  *[_type == "post"] | order(publicadoEm desc) [0...3] {
    _id, titulo, slug, categoria, resumo, tempoLeitura, publicadoEm, capa
  }
`

export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id, titulo, slug, categoria, resumo, tempoLeitura, tags,
    conteudo, publicadoEm, capa, seoTitulo, seoDescricao
  }
`

export const ALL_SLUGS_QUERY = `
  *[_type == "post"] { "slug": slug.current }
`
