<template>
  <section class="py-16 bg-scintl-blue text-white">
    <div class="container mx-auto px-4">
      <SharedSectionHeader
        tagline="Our Impact"
        heading="Real Projects, Real Results"
        alignment="center"
        heading-max-width="700px"
      >
        <template #after-heading>
          <p class="text-white/80 mt-4 max-w-2xl mx-auto">
            Delivering technology that transforms industries and communities.
          </p>
        </template>
      </SharedSectionHeader>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div class="bg-white/10 rounded-xl overflow-hidden group hover:bg-white/20 transition-all duration-300">
          <div class="h-48 bg-cover bg-center" style="background-image: url('/img/impact/bus-network.jpg')">
            <div class="w-full h-full bg-black/30 flex items-end p-4">
              <span class="bg-scintl-green/90 text-white text-xs font-semibold px-3 py-1 rounded-full">Transport</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Kampala Public Bus Network</h3>
            <p class="text-white/70 text-sm">
              SCINTL provided local infrastructure and support for the implementation of Optibus technology, helping modernize public transportation in Kampala.
            </p>
            <NuxtLink 
              to="https://blog.optibus.com/announcements/kampala-ugandas-first-public-bus-network-will-be-operated-using-optibus" 
              class="inline-flex items-center gap-2 text-scintl-green font-medium text-sm mt-4"
            >
              Learn More
            </NuxtLink>
          </div>
        </div>

        <div class="bg-white/10 rounded-xl overflow-hidden group hover:bg-white/20 transition-all duration-300">
          <div class="h-48 bg-cover bg-center" style="background-image: url('/img/impact/cobank.jpg')">
            <div class="w-full h-full bg-black/30 flex items-end p-4">
              <span class="bg-scintl-green/90 text-white text-xs font-semibold px-3 py-1 rounded-full">Finance</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Co-Bank+ Banking Solution</h3>
            <p class="text-white/70 text-sm">
              Our enterprise software solution sets new standards for financial institutions in Uganda, delivering secure and efficient core banking services.
            </p>
            <NuxtLink 
              to="https://tecnostac.com/core-banking-solutions-financial-institutions-uganda.htmlies/co-bank-plus" 
              class="inline-flex items-center gap-2 text-scintl-green font-medium text-sm mt-4"
            >
              Learn More
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>