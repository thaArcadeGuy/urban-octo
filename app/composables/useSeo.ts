interface SeoConfig {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  tags?: string[]
  noIndex?: boolean
}

export const useSeo = (config: SeoConfig) => {
  const siteUrl = 'https://www.scintl.co.ug'
  const defaultImage = `${siteUrl}/img/scintl-logo.png`
  
  const title = config.title
  const description = config.description
  const image = config.image ? `${siteUrl}${config.image}` : defaultImage
  const url = config.url ? `${siteUrl}${config.url}` : siteUrl
  const type = config.type || 'website'

  useHead({
    title: title,
    meta: [
      { name: 'description', content: description },
      
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
     
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      
      { name: 'robots', content: config.noIndex ? 'noindex, nofollow' : 'index, follow' },
    ],
    link: [
      { rel: 'canonical', href: url },
    ],
  })

  if (config.type === 'article') {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description: description,
            image: image,
            datePublished: config.publishedTime,
            dateModified: config.modifiedTime,
            author: {
              '@type': 'Organization',
              name: config.author || 'SCINTL',
            },
          }),
        },
      ],
    })
  } else {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: title,
            description: description,
            url: url,
          }),
        },
      ],
    })
  }
}