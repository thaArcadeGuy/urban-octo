<template>
  <header class="py-6">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">

      <!-- Logo -->
      <NuxtLink to="/" class="shrink-0">
        <NuxtImg
          src="/img/scintl-logo-new.jpg"
          alt="SCINTL logo"
          width="130"
        />
      </NuxtLink>

      <!-- Navigation -->
      <nav class="hidden laptop:block">
        <ul class="flex items-center gap-10 text-[1.125rem]">
          <li>
            <NuxtLink to="/" class="hover:text-[#7DBD4A] transition-colors">
              Home
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/about" class="hover:text-[#7DBD4A] transition-colors">
              About
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/solutions" class="hover:text-[#7DBD4A] transition-colors">
              Solutions
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/careers" class="hover:text-[#7DBD4A] transition-colors">
              Careers
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Right Section -->
      <div class="flex items-center gap-8">

        <!-- Phone -->
        <div class="hidden desktop:flex items-center gap-4">

          <div
            class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition hover:bg-[#7DBD4A] hover:text-white"
          >
            <Icon
              name="material-symbols:phone-in-talk"
              size="22"
            />
          </div>

          <div class="flex flex-col gap-2">
            <p class="text-sm text-gray-500">
              Phone Call Now!
            </p>

            <p class="font-bold">
              +256 775 212 108
            </p>
          </div>

        </div>

        <!-- CTA -->
        <NuxtLink
          to="/contact"
          class="group relative hidden laptop:inline-flex overflow-hidden rounded bg-[#0A4A6E] px-8 py-3 font-medium text-white"
        >
          <span
            class="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 ease-in-out group-hover:translate-x-0"
          ></span>

          <span class="relative z-10">
            Get In Touch
          </span>
        </NuxtLink>

        <!-- Mobile Menu -->
        <button class="laptop:hidden">
          <Icon
            name="material-symbols:menu"
            size="32"
          />
        </button>

      </div>

    </div>
  </header>
</template>