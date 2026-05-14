import createImageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

const builder = projectId
  ? createImageUrlBuilder({ projectId, dataset })
  : null

export function urlFor(source: Parameters<ReturnType<typeof createImageUrlBuilder>['image']>[0]) {
  if (!builder) return { url: () => '' } as ReturnType<ReturnType<typeof createImageUrlBuilder>['image']>
  return builder.image(source)
}
