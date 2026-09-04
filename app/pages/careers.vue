<script setup lang="ts">
import { useSeo } from '~/composables/useSeo'

useSeo({
  title: 'Careers | Join Our Team',
  description: 'Join SCINTL\'s team and help deliver technology solutions that transform businesses and communities across Africa.',
  url: '/careers',
  type: 'website',
})
</script>

<template>
  <SharedPageHero
    background-image="/img/careers/careers.jpg"
    tagline="Join Our Team"
    headline="Build Your<br />"
    headline-highlight="Career with SCINTL"
    paragraph="We're looking for passionate talent to help us deliver technology that transforms businesses and communities across Africa."
    :overlay-opacity="60"
  />
  <CareersWhy />
  <CareersOpenings />
</template>