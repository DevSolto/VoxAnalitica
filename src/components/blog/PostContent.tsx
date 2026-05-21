'use client'

import { PortableText, type PortableTextComponents } from 'next-sanity'
import { urlFor } from '@/lib/sanity/image'

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-text-primary leading-relaxed mb-5">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl lg:text-3xl font-semibold text-brand-blue mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-brand-blue mt-10 mb-3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-amber pl-5 my-6 text-text-primary italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-5 space-y-2 text-text-primary">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-5 space-y-2 text-text-primary">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-brand-blue">{children}</strong>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-blue underline hover:text-brand-blue-dark"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      const builder = urlFor(value)
      const url = builder?.width(1200).url()
      if (!url) return null
      return (
        <figure className="my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt={value.alt || ''} className="rounded-lg w-full" />
          {value.caption && (
            <figcaption className="text-sm text-text-muted mt-2 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

export default function PostContent({ value }: { value: any }) {
  if (!value) return null
  return (
    <div>
      <PortableText value={value} components={components} />
    </div>
  )
}
