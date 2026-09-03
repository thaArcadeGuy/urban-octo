<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (link: string) => {
  const currentPath = route.path.replace(/\/$/, '')
  const linkPath = link.replace(/\/$/, '')
  return currentPath === linkPath
}

interface Props {
  title: string
  tagline?: string
  heroImage?: string
  overview: string
  detailedDescription?: string
  features?: { title: string; description: string }[]
  benefits?: string[]
  ctaText?: string
  ctaLink?: string
  serviceImage?: string
  sidebarLinks?: { title: string; link: string }[]
}

const props = withDefaults(defineProps<Props>(), {
  tagline: 'Solutions',
  heroImage: '/img/solutions/solutions-hero.jpg',
  detailedDescription: '',
  features: () => [],
  benefits: () => [],
  ctaText: 'Get Started',
  ctaLink: '/contact',
  serviceImage: '/img/solutions/service-detail.jpg',
  sidebarLinks: () => []
})

// Sidebar links 
const defaultSidebarLinks = [
  { title: 'Cloud', link: '/solutions/cloud' },
  { title: 'Cybersecurity', link: '/solutions/security' },
  { title: 'Technology', link: '/solutions/tech' },
  { title: 'Enterprise', link: '/solutions/enterprise' },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <SharedPageHero
      :background-image="heroImage"
      tagline="Solutions"
      :headline="title"
      :paragraph="tagline"
      alignment="center"
      :overlay-opacity="60"
    />

    <!-- Main Content Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 md:px-8 lg:px-32">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Main Content (8 columns) -->
          <div class="lg:col-span-8">
            <div class="service-details-post">
              <!-- Service Image -->
              <div class="details-image rounded-xl overflow-hidden mb-8">
                <NuxtImg
                  :src="serviceImage"
                  :alt="title"
                  class="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="450"
                  format="webp"
                />
              </div>

              <!-- Details Content -->
              <div class="details-content">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 font-heading">
                  {{ title }}
                </h2>

                <!-- Overview -->
                <p class="text-gray-600 mt-4 leading-relaxed">
                  {{ overview }}
                </p>

                <!-- Detailed Description -->
                <p v-if="detailedDescription" class="text-gray-600 mt-4 leading-relaxed">
                  {{ detailedDescription }}
                </p>

                <!-- Feature List -->
                <div v-if="features && features.length" class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div
                    v-for="feature in features"
                    :key="feature.title"
                    class="flex items-start gap-3 bg-gray-50 rounded-lg p-4"
                  >
                    <Icon name="material-symbols:beenhere-outline" class="w-5 h-5 text-scintl-green flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 class="font-semibold text-gray-800 text-sm">{{ feature.title }}</h4>
                      <p class="text-gray-600 text-xs">{{ feature.description }}</p>
                    </div>
                  </div>
                </div>

                <!-- Benefits/Icon Items -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 p-6 bg-[#E5F0F7] rounded-xl">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-white/60 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="heroicons:rocket-launch-20-solid" class="w-6 h-6 text-scintl-green" />
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-800 text-sm">Global Expertise</h4>
                      <p class="text-gray-600 text-xs">We deliver solutions that meet global standards</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-white/60 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="heroicons:user-group-20-solid" class="w-6 h-6 text-scintl-green" />
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-800 text-sm">Local Impact</h4>
                      <p class="text-gray-600 text-xs">We deliver solutions that work for Ugandan businesses</p>
                    </div>
                  </div>
                </div>

                <!-- Benefits List -->
                <div v-if="benefits && benefits.length" class="mt-8">
                  <h3 class="text-lg font-semibold text-gray-800 mb-4">Key Benefits</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div
                      v-for="benefit in benefits"
                      :key="benefit"
                      class="flex items-center gap-2 text-gray-600"
                    >
                      <Icon name="material-symbols:beenhere-outline" class="w-4 h-4 text-scintl-green flex-shrink-0" />
                      <span>{{ benefit }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-4">
            <div class="main-sidebar space-y-6">
              <!-- Sidebar Navigation -->
              <div class="bg-[#E8F5E9] rounded-xl p-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Our Solutions</h3>
                <ul class="space-y-2">
                  <li
                    v-for="link in (sidebarLinks.length ? sidebarLinks : defaultSidebarLinks)"
                    :key="link.title"
                  >
                    <NuxtLink
                      :key="route.fullPath"
                      :to="link.link"
                      class="flex items-center justify-between p-3 rounded-lg transition-all duration-300 group"
                      :class="[
                        isActive(link.link) 
                          ? 'bg-scintl-green text-white' 
                          : 'bg-white text-gray-700 hover:bg-scintl-green hover:text-white'
                      ]"
                    >
                      <span class="text-sm font-medium">{{ link.title }}</span>
                      <Icon
                        name="material-symbols:arrow-forward"
                        class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        :class="isActive(link.link) ? 'text-white' : 'text-gray-400 group-hover:text-white'"
                      />
                    </NuxtLink>
                  </li>
                </ul>
              </div>

              <!-- Contact CTA Sidebar -->
              <div class="relative rounded-xl overflow-hidden min-h-[250px]">
                <!-- Background Image -->
                <div
                  class="absolute inset-0 bg-cover bg-center"
                  style="background-image: url('/img/solutions/akif-abstract.jpg')"
                ></div>
                <!-- Overlay -->
                <div class="absolute inset-0 bg-scintl-green/5"></div>

                <!-- Content -->
                <div class="relative z-10 p-6 flex flex-col justify-center h-full text-center text-white">
                  <h3 class="text-xl font-bold font-heading mb-4">
                    Have a Project in Mind?
                  </h3>
                  <p class="text-white/80 text-sm mb-6">
                    Let's discuss how we can help you achieve your technology goals.
                  </p>

                  <h3 class="text-l font-bold font-heading mb-4">
                    Call Us Any time on
                  </h3>

                  <h2 class="text-3xl font-bold font-heading mb-4">
                    +256 775 212 108
                  </h2>

                  <NuxtLink
                    to="/contact"
                    class="inline-flex items-center justify-center bg-scintl-green text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all hover:shadow-lg"
                  >
                    Get In Touch
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <SharedCta />
</template>