export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <div className="pt-20">
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-text-muted text-sm font-mono">post/{slug} — em construção</p>
      </section>
    </div>
  )
}
