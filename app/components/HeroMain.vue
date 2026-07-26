<template>
  <section class="relative w-full overflow-hidden bg-[#E8F5E9]">
    <div class="laptop:flex laptop:h-[760px]">

      <!-- Hero Content -->
      <div
        class="
          relative z-10
          flex w-full flex-col items-center gap-6 px-4 py-12 text-center
          sm:px-6 sm:py-16
          laptop:pr-12 laptop:py-20 laptop:pl-32
          laptop:w-1/2 laptop:items-start laptop:justify-center laptop:text-left
          desktop:pl-32
        "
      >
        <h1
          class="
            w-full max-w-[600px] font-heading font-black leading-tight
            text-3xl sm:text-4xl md:text-5xl laptop:text-xl desktop:text-6xl laptop:pl-12
          "
        >
          Technology Solutions That Deliver Results
        </h1>

        <p
          class="
            w-full max-w-[580px] font-body leading-relaxed
            text-base sm:text-lg laptop:text-lg laptop:pl-12 desktop:text-xl
          "
        >
          From cloud infrastructure to cybersecurity, we deliver technology
          solutions that solve business problems and accelerate your return on
          investment.
        </p>

        <div class="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap laptop:pl-12">
          <NuxtLink
            to="/solutions"
            class="group relative inline-flex justify-center overflow-hidden rounded bg-[#7DBD4A] px-8 py-3 font-medium text-white"
          >
            <span class="absolute inset-0 -translate-x-full bg-[#0A4A6E] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
            <span class="relative z-10">Learn More</span>
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="group relative inline-flex justify-center overflow-hidden rounded border-2 border-[#7DBD4A] bg-transparent px-8 py-3 font-medium text-[#7DBD4A] transition-colors hover:border-[#0A4A6E] hover:text-white"
          >
            <span class="absolute inset-0 -translate-x-full bg-[#0A4A6E] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
            <span class="relative z-10">Get In Touch</span>
          </NuxtLink>
        </div>

        <!-- mobile/tablet  -->
        <div class="mt-4 w-full shadow-md rounded laptop:hidden">
          <img
            src="/img/hero-img-mobile.png"
            alt="SCINTL technology solutions"
            width="1024"
            height="1024"
            class="block h-auto w-full object-contain"
          />
        </div>
      </div>

      <!-- Background image: laptop+ -->
      <div
        class="
          hidden
          laptop:relative laptop:block laptop:w-1/2
          laptop:bg-[url('/img/hero-img-mobile.png')]
          laptop:bg-cover laptop:bg-center laptop:bg-no-repeat
        "
      >
        <!-- Tilt shape -->
        <div
          class="
            pointer-events-none absolute left-0 top-0 z-9
            hidden h-full w-28 -translate-x-1/2 skew-x-[-8deg] bg-[#E8F5E9]
            laptop:block
          "
        ></div>
      </div>

    </div>
  </section>
</template>