<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navigation = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Solutions",
    to: "/solutions",
  },
  {
    label: "Careers",
    to: "/careers",
  },
]

// Handle scroll event
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Add/remove scroll listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    class="fixed top-0 left-0 w-full z-50 transition-all bg-red duration-300"
    :class="[
      isScrolled 
        ? 'bg-[#E5F0F7] shadow-md py-4' 
        : 'bg-white py-6'
    ]"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">

      <!-- Logo -->
      <NuxtLink to="/" class="shrink-0">
        <NuxtImg
          src="/img/scintl-logo.png"
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

          <div class="flex flex-col gap-1">
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
        <button 
          class="laptop:hidden"
          @click="isMenuOpen = true"
        >
          <Icon
            name="material-symbols:menu"
            size="32"
          />
        </button>

      </div>

    </div>
    
    <!-- Mobile Menu Overlay -->
    <Transition name="fade">

      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-40 bg-black/50"
        @click="isMenuOpen = false"
      />

    </Transition>


    <!-- Mobile Drawer -->
    <Transition name="slide">

      <aside
        v-if="isMenuOpen"
        class="fixed right-0 top-0 z-50 flex h-full w-[320px] flex-col bg-white px-6 py-6 shadow-xl"
      >

        <!-- Close Button -->
        <div class="flex justify-end">
          <button
            @click="isMenuOpen = false"
          >
            <Icon
              name="material-symbols:close"
              size="32"
            />
          </button>
        </div>


        <!-- Logo -->
        <NuxtLink
          to="/"
          class="mt-6"
          @click="isMenuOpen = false"
        >
          <NuxtImg
            src="/img/scintl-logo-new.jpg"
            alt="SCINTL logo"
            width="130"
          />
        </NuxtLink>


        <!-- Navigation -->
        <nav class="mt-10 flex-1">

          <ul class="space-y-6">

            <li
              v-for="item in navigation"
              :key="item.to"
            >

              <NuxtLink
                :to="item.to"
                class="text-lg font-medium hover:text-[#7DBD4A]"
                @click="isMenuOpen = false"
              >
                {{ item.label }}
              </NuxtLink>

            </li>

          </ul>

        </nav>


        <!-- CTA -->
        <NuxtLink
          to="/contact"
          class="rounded bg-[#0A4A6E] px-8 py-3 text-center font-medium text-white"
          @click="isMenuOpen = false"
        >
          Get In Touch
        </NuxtLink>


      </aside>

    </Transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>