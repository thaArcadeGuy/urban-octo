<script setup lang="ts">
import SolutionDetail from '~/components/solutions/Detail.vue'

const title = 'Enterprise Solutions'
const tagline = 'Integrated business systems that unify your entire organization.'
const heroImage = '/img/solutions/enterprise-hero.jpg'
const serviceImage = '/img/solutions/dashboard.jpg'
const overview = 'Modern enterprises rely on data flowing seamlessly across departments. Our enterprise solutions connect your CRM, ERP, HR, and other core systems, breaking down data silos and providing a single source of truth.'
const detailedDescription = 'This integration empowers better decision-making, operational efficiency, and a unified customer experience. Whether you\'re a growing enterprise or an established organization, we help you build a scalable technology foundation that supports your long-term business objectives.'

const features = [
  {
    title: 'System Integration',
    description: 'Connect your core business systems for seamless data flow'
  },
  {
    title: 'Process Automation',
    description: 'Automate workflows and reduce manual tasks across departments'
  },
  {
    title: 'Data Analytics & Reporting',
    description: 'Gain insights with real-time dashboards and reporting tools'
  },
  {
    title: 'Scalable Architecture',
    description: 'Build systems that grow with your business'
  }
]

const benefits = [
  'Improved operational efficiency',
  'Better data-driven decision making',
  'Enhanced customer experience',
  'Reduced operational costs',
  'Scalable and future-proof solutions',
  'Unified view of your entire organization'
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