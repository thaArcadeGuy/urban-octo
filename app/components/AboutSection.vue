<script lang="ts" setup>
const partners = [
  // {id: 1, logo: '/img/partners/odoo.png', name: 'Odoo' },
  {id: 3, logo: '/img/partners/microsoft.png', name: 'Microsoft' },
  {id: 4, logo: '/img/partners/oracle.png', name: 'Oracle' },
  {id: 6,  logo: '/img/partners/regula.png', name: 'Regula' },
]
</script>
<template>
  <section class="py-16 bg-[#E8F5E9]">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image Column -->
        <div class="order-2 lg:order-1">
          <NuxtImg
            src="/img/about/team.jpg"
            alt="SCINTL Team"
            class="rounded-xl shadow-lg w-full h-auto"
            loading="lazy"
          />
          <!-- Optional: Partner logos row -->
          <div class="flex flex-wrap gap-4 mt-4 justify-center">
            <img v-for="partner in partners" :key="partner.id" 
                 :src="partner.logo" 
                 :alt="partner.name" 
                 class="h-8 w-auto grayscale opacity-50" />
          </div>
        </div>

        <!-- Content Column -->
        <div class="order-1 lg:order-2">
          <h5 class="text-scintl-green font-semibold text-[1rem] uppercase tracking-wider">
            Who We Are
          </h5>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mt-2 font-heading">
            Local Expertise. Global Partnerships.
          </h2>
          <p class="text-gray-600 mt-4 leading-relaxed">
            SCINTL is a Ugandan-owned ICT enterprise that helps organizations adopt 
            technology solutions that deliver real business results. We combine 
            global partnerships with Microsoft, Oracle, IBM, and Thales with deep 
            local expertise to serve clients across government, finance, and 
            transportation sectors.
          </p>
          
          <!-- Trust Signals -->
          <div class="mt-6 space-y-3">
            <div class="flex items-center gap-3">
              <Icon name="material-symbols:beenhere-outline" class="w-5 h-5 text-scintl-green" />
              <span class="text-gray-700">Global partnerships with leading technology providers</span>
            </div>
            <div class="flex items-center gap-3">
              <Icon name="material-symbols:beenhere-outline" class="w-5 h-5 text-scintl-green" />
              <span class="text-gray-700">Deep local expertise serving Ugandan businesses</span>
            </div>
            <div class="flex items-center gap-3">
              <Icon name="material-symbols:beenhere-outline" class="w-5 h-5 text-scintl-green" />
              <span class="text-gray-700">Proven track record in government, finance, and transportation</span>
            </div>
          </div>

          <!-- CTAs -->
          <!-- <div class="mt-8 flex flex-wrap gap-4">
            <NuxtLink 
              to="/about" 
              class="bg-scintl-green text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              Learn More About Us →
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="border-2 border-scintl-green text-scintl-green px-6 py-3 rounded-lg font-medium hover:bg-scintl-green hover:text-white transition-all"
            >
              Get a Free Consultation
            </NuxtLink>
          </div> -->
          <div class="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap">
          <NuxtLink
            to="/about"
            class="group relative inline-flex justify-center overflow-hidden rounded bg-[#7DBD4A] px-8 py-3 font-medium text-white"
          >
            <span class="absolute inset-0 -translate-x-full bg-[#0A4A6E] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
            <span class="relative z-10">Explore More</span>
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="group relative inline-flex justify-center overflow-hidden rounded border-2 border-[#7DBD4A] bg-transparent px-8 py-3 font-medium text-[#7DBD4A] transition-colors hover:border-[#0A4A6E] hover:text-white"
          >
            <span class="absolute inset-0 -translate-x-full bg-[#0A4A6E] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
            <span class="relative z-10">Get In Touch</span>
          </NuxtLink>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>