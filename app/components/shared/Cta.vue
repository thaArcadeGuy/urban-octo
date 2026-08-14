<template>
  <section class="py-16 bg-scintl-green">
    <div class="container mx-auto px-4 text-center">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl md:text-4xl font-bold text-white font-heading">
          Ready to Discuss Your Next Project?
        </h2>
        <p class="text-white/90 mt-4 text-base md:text-lg max-w-2xl mx-auto">
          Let's talk about how SCINTL can help you achieve your technology goals.
        </p>
        <div class="mt-8 ">
           <NuxtLink
            to="/contact"
            class=" group relative inline-flex justify-center overflow-hidden rounded bg-white px-8 py-3 font-medium text-scintl-green shadow-lg hover:shadow-xl hover:text-white"
          >
            <span class="absolute inset-0 -translate-x-full rounded bg-[#0A4A6E] transition-transform duration-500 ease-in-out group-hover:translate-x-0 border-2 border-white "></span>
            <span class="relative z-10 ">Get In Touch</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>