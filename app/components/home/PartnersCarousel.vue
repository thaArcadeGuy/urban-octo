<script lang="ts" setup>
const logos = [
  { id: 1, src: '/img/partners/odoo.png', alt: 'Odoo' },
  { id: 2, src: '/img/partners/mtn.png', alt: 'MTN Uganda' },
  { id: 3, src: '/img/partners/nssf.png', alt: 'NSSF Uganda' },
  { id: 4, src: '/img/partners/hp.png', alt: 'HP' },
  { id: 5, src: '/img/partners/tecnostac.png', alt: 'Tecnostac' },
  { id: 6, src: '/img/partners/upf.png', alt: 'Uganda Police Forces' },
  { id: 7, src: '/img/partners/facephi.png', alt: 'Facephi' },
  { id: 8, src: '/img/partners/microsoft.png', alt: 'Microsoft' },
  { id: 9, src: '/img/partners/oracle.png', alt: 'Oracle' },
  { id: 10, src: '/img/partners/thales.png', alt: 'Thales' },
  { id: 11, src: '/img/partners/regula.png', alt: 'Regula' },
  { id: 12, src: '/img/partners/optibus.png', alt: 'Optibus' },
]
</script>

<template>
  <section class="py-8 bg-gray-50 overflow-hidden">
    <div class="container mx-auto px-4">
      <h2 class="text-xl md:text-1xl font-semibold text-center text-gray-800 mb-6">
        Trusted by Leading Partners & Clients
      </h2>

      <div class="relative overflow-hidden">
        <!-- Gradient overlays (Tailwind way) -->
        <div class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

        <div class="flex gap-12 animate-infinite-scroll">
          <div
            v-for="logo in logos"
            :key="logo.id"
            class="flex-shrink-0 flex items-center justify-center h-20 px-4"
          >
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="max-h-[30px] w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div
            v-for="logo in logos"
            :key="`dup-${logo.id}`"
            class="flex-shrink-0 flex items-center justify-center h-20 px-4"
          >
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="max-h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-infinite-scroll {
  animation: scroll 30s linear infinite;
  width: max-content;
}

/* Pause on hover */
.animate-infinite-scroll:hover {
  animation-play-state: paused;
}
</style>