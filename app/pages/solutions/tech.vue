<script setup lang="ts">
import SolutionDetail from '~/components/solutions/Detail.vue'
import { useSeo } from '~/composables/useSeo'

useSeo({
  title: 'Technology Implementation | End-to-End Solutions',
  description: 'SCINTL delivers end-to-end technology implementation of people, processes, and technology to solve business problems.',
  url: '/solutions/tech',
  type: 'website',
})

const title = 'Technology Implementation'
const tagline = 'End-to-end implementation of people, processes, and technology to solve business problems.'
const heroImage = '/img/solutions/tech-hero.jpg'
const serviceImage = '/img/solutions/tech-service.jpg'
const overview = 'We don\'t just provide technology; we ensure it delivers results. Our implementation services cover the entire lifecycle from understanding your requirements to managing the deployment of complex systems.'
const detailedDescription = 'By integrating global technology standards with deep local expertise, we help your team adopt new systems faster and realize a tangible return on investment. Our proven methodology reduces implementation risk and ensures your technology investments drive measurable business outcomes.'

const features = [
  {
    title: 'Consulting & Strategy',
    description: 'Define a clear technology roadmap aligned with your business goals'
  },
  {
    title: 'Design & Development',
    description: 'Build custom solutions using proven frameworks and technologies'
  },
  {
    title: 'Deployment & Integration',
    description: 'Seamlessly deploy with minimal disruption to your operations'
  },
  {
    title: 'Training & Support',
    description: 'Empower your team with comprehensive training and ongoing support'
  }
]

const benefits = [
  'Reduced implementation risk',
  'Faster time to value and ROI',
  'Expert guidance throughout the journey',
  'Customized solutions for your specific needs',
  'Local support team with global standards',
  'Proven implementation methodology'
]
</script>

<template>
  <SolutionDetail
    :title="title"
    :tagline="tagline"
    :hero-image="heroImage"
    :service-image="serviceImage"
    :overview="overview"
    :detailed-description="detailedDescription"
    :features="features"
    :benefits="benefits"
  />
</template>