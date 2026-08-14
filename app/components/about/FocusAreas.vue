<script setup lang="ts">
const focusAreas = [
  {
    id: 1,
    icon: 'material-symbols:cloud-outline',
    title: 'Cloud & Infrastructure',
    description: 'Scalable cloud solutions and IT infrastructure for businesses and government.'
  },
  {
    id: 2,
    icon: 'material-symbols:security-outline',
    title: 'Cybersecurity',
    description: 'Comprehensive security strategies to protect your data and systems.'
  },
  {
    id: 3,
    icon: 'material-symbols:verified-outline',
    title: 'Digital Identity & Verification',
    description: 'Identity solutions for national IDs, border management, and voter authentication.'
  },
  {
    id: 4,
    icon: 'material-symbols:apartment-outline',
    title: 'Enterprise Software',
    description: 'Custom enterprise solutions including Co-Bank+ for financial institutions.'
  },
  {
    id: 5,
    icon: 'material-symbols:code-outline',
    title: 'Custom Software Development',
    description: 'Tailored software development for local and international clients.'
  },
  {
    id: 6,
    icon: 'material-symbols:engineering-outline',
    title: 'Implementation & Support',
    description: 'End-to-end implementation and ongoing support for all solutions.'
  },
]
</script>
<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <SharedSectionHeader 
          tagline="Our Core Expertise"
          heading="Our Focus Areas"
        >
          <template #after-heading>
            <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
              From cloud infrastructure to enterprise systems, we deliver tailored technology solutions that solve real business problems.
            </p>
          </template>
        </SharedSectionHeader>
      
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div v-for="focus in focusAreas" :key="focus.id" class="bg-[#E5F0F7] rounded-xl p-6 hover:shadow-md  hover:bg-[#E8F5E9] transition-shadow">
            <div class="flex items-start gap-4">
              <Icon :name="focus.icon" class="w-8 h-8 text-scintl-green flex-shrink-0" />
              <div>
                <h3 class="font-semibold text-gray-800 hover:text-scintl-green">{{ focus.title }}</h3>
                <p class="text-gray-600 text-sm mt-1">{{ focus.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>