<script setup lang="ts">
const partners = [
  { id: 1, name: 'Microsoft', logo: '/img/partners/microsoft.png' },
  { id: 2, name: 'Oracle', logo: '/img/partners/oracle.png' },
  { id: 3, name: 'IBM', logo: '/img/partners/ibm.png' },
  { id: 4, name: 'Thales', logo: '/img/partners/thales.png' },
  { id: 5, name: 'Regula', logo: '/img/partners/regula.png' },
  { id: 6, name: 'Optibus', logo: '/img/partners/optibus.png' },
  { id: 7, name: 'Facephi', logo: '/img/partners/facephi.png' },
  { id: 8, name: 'HP', logo: '/img/partners/hp.png' },
]
</script>
<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <SharedSectionHeader
          tagline="Our Partners"
          heading="Trusted by Industry Leaders"
          alignment="center"
          heading-max-width="700px"
        />
        
        <!-- Partnerships -->
        <div class="mb-10 mt-4">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Global Technology Partners</h3>
          <p class="text-gray-600 mb-6">
            We work with global technology leaders to deliver the best solutions for our clients:
          </p>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div 
              v-for="partner in partners" 
              :key="partner.id"
              class="bg-gray-50 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow"
            >
              <img 
                :src="partner.logo" 
                :alt="partner.name"
                class="max-h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <!-- Strategic Partnership Highlight -->
        <div class="bg-[#E5F0F7] rounded-xl p-6 md:p-8">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">Strategic Partnership</h3>
          <p class="text-gray-700 leading-relaxed">
            SCINTL has partnered with <strong>Facephi</strong>, a global leader in digital identity solutions, 
            to deliver advanced identity verification and authentication systems in Uganda. 
            This partnership enables us to provide cutting-edge solutions for national IDs, 
            border management, voter authentication, and healthcare verification.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>