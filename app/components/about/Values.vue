<script setup lang="ts">
const coreValues = [
  {
    id: 1,
    title: 'We have Integrity',
    description: "We do what's right, even when no one is watching."
  },
  {
    id: 2,
    title: 'We are Efficient',
    description: 'We deliver results that matter on time, on budget, and with minimal disruption.'
  },
  {
    id: 3,
    title: 'We respect Confidentiality',
    description: 'Your data, your business, and your trust are sacred. We handle every piece of information with the care and security it deserves.'
  },
  {
    id: 4,
    title: 'We are Reliable',
    description: 'We show up. We deliver. We follow through. When you partner with SCINTL, you can count on us to be there every step of the way.'
  },
  {
    id: 5,
    title: 'We value Teamwork',
    description: 'We go further together. Our best solutions come from collaboration across teams, partners, and continents.'
  },
  {
    id: 6,
    title: 'We are Transparent',
    description: 'We believe in open communication, clear expectations, and honest feedback.'
  },
]
</script>
<template>
  <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="laptop:grid grid-cols-2">
          <SharedSectionHeader 
            tagline="Our Values" 
            heading="The Principles That Guide Us" 
            alignment="left"
          />
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div v-for="value in coreValues" :key="value.id" class="border-b-2 border-gray-400 py-4">
              <div class="flex items-start gap-4">
                <Icon name="material-symbols:asterisk-outline" class="w-8 h-8 text-scintl-green flex-shrink-0" />
                <div>
                  <h3 class="font-semibold text-gray-800">{{ value.title }}</h3>
                  <p class="text-gray-600 text-sm mt-1">{{ value.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>