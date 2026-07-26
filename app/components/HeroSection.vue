<template>
  <section class="w-full bg-[#f5f4f3] pb-[50rem] laptop:pb-[55rem] ">

    <div class="flex flex-col items-center gap-4 px-6">

      <!-- Heading -->
      <h1
        class="w-full max-w-[50rem] pt-24 text-center text-4xl font-black md:text-6xl"
      >
        Technology Solutions That Deliver Results
      </h1>

      <!-- Description -->
      <p
        class="w-full max-w-[40rem] text-center text-lg md:text-xl"
      >
        From cloud infrastructure to cybersecurity, we deliver technology
        solutions that solve business problems and accelerate your return on
        investment.
      </p>

      <!-- Buttons -->
      <div class="flex gap-2">

        <!-- Learn More -->
        <NuxtLink
          to="/solutions"
          class="group relative hidden overflow-hidden rounded bg-[#7DBD4A] px-8 py-3 font-medium text-white laptop:inline-flex"
        >
          <span
            class="absolute inset-0 -translate-x-full bg-[#0A4A6E] transition-transform duration-500 ease-in-out group-hover:translate-x-0"
          ></span>

          <span class="relative z-10">
            Learn More
          </span>
        </NuxtLink>

        <!-- Get In Touch -->
        <NuxtLink
          to="/contact"
          class="group relative hidden overflow-hidden rounded border-2 border-white bg-transparent px-8 py-3 font-medium text-white laptop:inline-flex"
        >
          <span
            class="absolute inset-0 -translate-x-full bg-[#0A4A6E] transition-transform duration-500 ease-in-out group-hover:translate-x-0"
          ></span>

          <span class="relative z-10">
            Get In Touch
          </span>
        </NuxtLink>

      </div>

      <!-- Laptop / Desktop Hero Image -->
      <div
        class="hidden w-full max-w-7xl overflow-hidden rounded shadow-md laptop:mt-10 laptop:block"
      >
        <NuxtImg
          src="/img/hero-img.png"
          alt="SCINTL technology solutions"
          class="h-auto w-full object-cover"
          sizes="(max-width: 1439px) 100vw, 1200px"
        />
      </div>

      <!-- Mobile / Tablet Hero Image -->
      <div
        class="mt-10 w-full max-w-7xl overflow-hidden rounded shadow-md laptop:hidden"
      >
        <NuxtImg
          src="/img/hero-img-mobile.png"
          alt="SCINTL technology solutions"
          class="block h-auto w-full"
        />
      </div>

    </div>

  </section>
</template>