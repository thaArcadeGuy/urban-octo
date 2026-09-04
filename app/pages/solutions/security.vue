<script setup lang="ts">
import SolutionDetail from '~/components/solutions/Detail.vue'
import { useSeo } from '~/composables/useSeo'

useSeo({
  title: 'Cybersecurity | Protect Your Business',
  description: 'SCINTL provides comprehensive cybersecurity strategies to protect your computers, networks, and sensitive data from evolving threats.',
  url: '/solutions/security',
  type: 'website',
})

const title = 'Cybersecurity'
const tagline = 'Comprehensive security strategies to protect your business from evolving threats.'
const heroImage = '/img/solutions/cybersecurity.jpg'
const serviceImage = '/img/solutions/cybersecurity-service.jpg'
const overview = 'Cyber threats are constantly evolving, and so are our defenses. We offer a holistic approach to security that covers everything from initial risk assessment and vulnerability testing to implementing robust firewalls, endpoint detection, and employee training.'
const detailedDescription = 'Our partnership with leaders like Thales helps us provide cutting-edge identity and data protection solutions, ensuring your business stays resilient and compliant. We work with you to build a security posture that not only protects your assets but also enables your business to grow with confidence in an increasingly digital world.'

const features = [
  {
    title: 'Risk Assessment & Auditing',
    description: 'Identify vulnerabilities before attackers can exploit them'
  },
  {
    title: 'Network Security',
    description: 'Firewalls, intrusion detection, and secure access controls'
  },
  {
    title: 'Endpoint Protection',
    description: 'Protect all devices connected to your network'
  },
  {
    title: 'Identity & Access Management',
    description: 'Multi-factor authentication and identity verification'
  }
]

const benefits = [
  '24/7 threat monitoring and response',
  'Proactive vulnerability detection',
  'Compliance with local and international regulations',
  'Data encryption and protection',
  'Employee security training programs',
  'Incident response planning'
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