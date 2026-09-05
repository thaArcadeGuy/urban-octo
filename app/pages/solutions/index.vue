<script setup lang="ts">
import { useSeo } from '~/composables/useSeo'

useSeo({
  title: 'Solutions | Cloud, Security, Technology & Enterprise',
  description: 'Explore SCINTL\'s technology solutions including cloud infrastructure, cybersecurity, technology implementation, and enterprise systems.',
  url: '/solutions',
  type: 'website',
})
</script>
<template>
  <SharedPageHero
    background-image="/img/solutions/solutions-hero.jpg"
    tagline="What We Do"
    headline="Technology Solutions That Drive Business Growth<br />"
    headline-highlight="& Deliver Real Results"
    paragraph="From cloud infrastructure and cybersecurity to enterprise systems and implementation, we deliver tailored technology solutions that solve real business problems and accelerate your return on investment."
    :overlay-opacity="60"
  />
  <SolutionsCards />
  <SharedCta />
</template>