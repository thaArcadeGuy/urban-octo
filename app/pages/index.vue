<script setup lang="ts">
import { useSeo } from '~/composables/useSeo'

useSeo({
  title: 'Technology Solutions That Deliver Results',
  description: 'SCINTL is a Ugandan-owned ICT enterprise delivering cloud, cybersecurity, technology implementation, and enterprise solutions across Africa.',
  url: '/',
  type: 'website',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'SCINTL',
        url: 'https://www.scintl.co.ug',
        logo: 'https://www.scintl.co.ug/img/scintl-logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+256775212108',
          contactType: 'sales',
        },
        sameAs: [
          'https://www.facebook.com/ScintlUG',
          'https://www.linkedin.com/company/scintl-ltd/',
          'http://www.twitter.com/ScintlUG',
          'https://www.instagram.com/scintl_ug',
        ],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <!-- <HomeHeroSection /> -->
    <HomeHeroMain />
    <HomePartnersCarousel />
    <HomeSolutionsSection />
    <HomeAboutSection />
    <HomeWorkProcess />
    <HomeCtaBanner />
    <HomeTestimonialSection/>
    <HomeCtaBannerFinal />
  </div>
</template>