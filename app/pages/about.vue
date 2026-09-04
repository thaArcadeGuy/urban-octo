<script setup lang="ts">
import { useSeo } from '~/composables/useSeo'

useSeo({
  title: 'About Us | Ugandan ICT Expertise',
  description: 'Learn about SCINTL - a Ugandan-owned ICT enterprise with global partnerships delivering technology solutions across Africa.',
  url: '/about',
  type: 'website',
})
</script>

<template>
  <div>
    <SharedPageHero
      background-image="/img/about/about-hero.jpg"
      tagline="About Us"
      headline="Ugandan-owned ICT Expertise.<br />"
      headline-highlight="Global Technology Partnerships."
      paragraph=" SCINTL is a Ugandan owned ICT enterprise that implements large-scale technology projects and develops custom software for local and international clients. We bridge the gap between global innovation and local execution."
    />
    <AboutUs />
    <AboutValues />
    <AboutPartners />
    <AboutFocusAreas />
    <AboutImpact />
    <AboutLeadership />
    <SharedCta />
  </div>
</template>