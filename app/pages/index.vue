<script setup lang="ts">
import { useSeo } from '~/composables/useSeo'
useSeo({
  title: 'Technology Solutions That Deliver Results',
  description: 'SCINTL is a Ugandan-owned ICT enterprise delivering cloud, cybersecurity, technology implementation, and enterprise solutions across Africa.',
  url: '/',
  type: 'website',
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