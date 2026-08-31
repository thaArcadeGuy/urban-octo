<template>
  <section class="py-16 bg-gradient-to-br from-scintl-blue to-[#0D2B4A]">
    <div class="container mx-auto px-4 text-center">
      <div class="max-w-3xl mx-auto">
        <!-- Trust Indicators -->
        <div class="flex flex-wrap justify-center gap-6 mb-8">
          <div class="flex items-center gap-2 text-white/80">
            <Icon name="material-symbols:beenhere-outline" class="w-5 h-5 text-scintl-green" />
            <span>Global Partnerships</span>
          </div>
          <div class="flex items-center gap-2 text-white/80">
            <Icon name="material-symbols:beenhere-outline" class="w-5 h-5 text-scintl-green" />
            <span>Local Expertise</span>
          </div>
          <div class="flex items-center gap-2 text-white/80">
            <Icon name="material-symbols:beenhere-outline" class="w-5 h-5 text-scintl-green" />
            <span>Proven Results</span>
          </div>
        </div>

        <h2 class="text-2xl md:text-4xl font-bold text-white font-heading">
          Let's Build Something Great Together
        </h2>
        <p class="text-white/80 mt-4 text-base md:text-lg max-w-2xl mx-auto">
          Whether you need cloud infrastructure, security solutions, or enterprise systems. We are here to help.
        </p>
        <div class="mt-8">
          <NuxtLink
            to="/contact"
            class="group relative inline-flex justify-center overflow-hidden rounded bg-scintl-green px-8 py-3 font-medium text-white shadow-lg hover:shadow-xl"
          >
            <span class="absolute inset-0 -translate-x-full bg-[#0A4A6E] transition-transform duration-500 ease-in-out group-hover:translate-x-0 border-2"></span>
            <span class="relative z-10">Get In Touch</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>