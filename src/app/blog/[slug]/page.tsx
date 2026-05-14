export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-20">
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-text-muted text-sm font-mono">post/{params.slug} — em construção</p>
      </section>
    </div>
  )
}
