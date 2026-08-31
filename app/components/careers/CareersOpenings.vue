<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 gap-4 items-center max-w-6xl mx-auto">
        <!-- Image Column -->
        <div class="">
          <NuxtImg
            src="/img/careers/team.jpg"
            alt="SCINTL Team - Our dedicated professionals"
            class="rounded-xl object-cover mx-auto"
            loading="lazy"
            width="800"
            height="600"
            format="webp"
          />
        </div>
        
        <!-- Content Column -->
        <div class="text-center max-w-2xl mx-auto">
          <!-- Description -->
          <p class="text-gray-600 mt-2 text-base md:text-lg leading-relaxed">
            We are always on the lookout for talented, passionate individuals to join our growing team. Keep an eye on our Careers Page for vacancies that match your expertise
          </p>
          
          <!-- CTA Button -->
          <div class="mt-6">
            <NuxtLink
              to="#"
              class="group relative inline-flex justify-center overflow-hidden rounded-lg bg-scintl-green px-8 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg"
            >
              <span class="absolute inset-0 -translate-x-full bg-scintl-blue transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
              <span class="relative z-10 flex items-center gap-2">
                View Careers
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>