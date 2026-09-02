<script setup lang="ts">
import SolutionDetail from '~/components/solutions/Detail.vue'

const title = 'Cloud Solutions'
const tagline = 'Scalable, secure, and accessible cloud infrastructure for modern businesses.'
const heroImage = '/img/solutions/circuit-board.jpg'
const serviceImage = '/img/solutions/cloud-woman.jpg'
const overview = 'We architect, deploy, and manage cloud solutions that are secure, scalable, and tailored to your business needs. Our team works with you to create a cloud strategy that optimizes costs, enhances flexibility, and ensures your data is always available.'
const detailedDescription = 'Whether you are migrating existing workloads or building cloud-native applications, we provide end-to-end support to accelerate your cloud adoption journey. Our cloud solutions are built on industry-leading platforms like Oracle Cloud, Microsoft Azure and AWS, ensuring you get the best of both worlds enterprise-grade reliability and cost-effective scalability.'

const features = [
  {
    title: 'Scalable Infrastructure',
    description: 'Scale your resources up or down based on demand'
  },
  {
    title: 'Data Storage & Backup',
    description: 'Secure cloud storage with automated backups'
  },
  {
    title: 'Global Accessibility',
    description: 'Access your data from anywhere in the world'
  },
  {
    title: 'Cost Optimization',
    description: 'Reduce infrastructure costs with flexible pricing'
  }
]

const benefits = [
  '99.9% uptime guarantee',
  '24/7 monitoring and support',
  'Flexible pricing models',
  'Secure data encryption',
  'Seamless migration services',
  'Expert guidance and support'
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