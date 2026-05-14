import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'
import SectionLink from '@/components/ui/SectionLink'
import { PostCard } from '@/components/blog/PostCard'
import { client } from '@/lib/sanity/client'
import { LATEST_POSTS_QUERY } from '@/lib/sanity/queries'

export default async function BlogPreview() {
  let posts: any[] = []
  try {
    if (client) {
      posts = await client.fetch(LATEST_POSTS_QUERY)
    }
  } catch {
    // Sanity ainda não configurado
  }

  return (
    <section className="bg-brand-blue-light py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel className="mb-3 block">Artigos</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-blue mb-12">
            Diagnósticos e análises do Nordeste
          </h2>
        </AnimatedSection>

        {posts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {posts.map((post: any, i: number) => (
              <AnimatedSection key={post._id} delay={i * 0.1}>
                <PostCard post={post} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection delay={0.1}>
            <p className="text-text-secondary text-sm mb-10">
              Artigos em breve — configure o Sanity CMS para publicar conteúdo.
            </p>
          </AnimatedSection>
        )}

        <AnimatedSection delay={0.3}>
          <SectionLink href="/blog">Ver todos os artigos →</SectionLink>
        </AnimatedSection>
      </div>
    </section>
  )
}
