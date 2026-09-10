<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <section class="py-16 bg-[#E5F0F7]">
    <div class="container mx-auto px-4">
      <div class="border-b border-gray-400 pb-8.5">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <!-- Column 1: Logo & Contact -->
          <div class="grid grid-cols-1 gap-4 mb-7.5 text-gray-600">
            <NuxtLink to="/" class="shrink-0">
              <NuxtImg
                src="/img/scintl-logo.png"
                alt="SCINTL logo"
                width="130"
              />
            </NuxtLink>
            <p>SCINTL Ltd is a Ugandan owned ICT Enterprise utilizing technology to provide efficient, safe and secure solutions.</p>
            <div>
              <div class="flex items-center gap-2 py-2">
                <Icon name="material-symbols:phone-in-talk" class="w-6 h-6 text-scintl-green flex-shrink-0" />
                <a href="tel:+256775212108" class="hover:text-scintl-green transition-colors">+256 775 212 108</a>
              </div>
              <div class="flex items-center gap-2 py-2">
                <Icon name="material-symbols:mail" class="w-6 h-6 text-scintl-green flex-shrink-0" />
                <a href="mailto:info@scintl.co.ug" class="hover:text-scintl-green transition-colors">info@scintl.co.ug</a>
              </div>
            </div>
          </div>

          <!-- Column 2: Company -->
          <div class="mt-4.5 laptop:ml-12">
            <h3 class="mb-5 text-gray-800 font-semibold text-[1.25rem]">Company</h3>
            <nav>
              <ul class="flex flex-col gap-2.5 text-[1rem] text-gray-600">
                <li>
                  <NuxtLink to="/" class="hover:text-scintl-green transition-colors">Home</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/about" class="hover:text-scintl-green transition-colors">About</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/careers" class="hover:text-scintl-green transition-colors">Careers</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact" class="hover:text-scintl-green transition-colors">Contact</NuxtLink>
                </li>
              </ul>
            </nav>
          </div>

          <!-- Column 3: Solutions -->
          <div class="mt-4.5 laptop:ml-12">
            <h3 class="mb-5 text-gray-800 font-semibold text-[1.25rem]">Solutions</h3>
            <nav>
              <ul class="flex flex-col gap-2.5 text-[1rem] text-gray-600">
                <li>
                  <NuxtLink to="/solutions/cloud" class="hover:text-scintl-green transition-colors">Cloud</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/solutions/security" class="hover:text-scintl-green transition-colors">Cybersecurity</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/solutions/tech" class="hover:text-scintl-green transition-colors">Technology</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/solutions/enterprise" class="hover:text-scintl-green transition-colors">Enterprise</NuxtLink>
                </li>
              </ul>
            </nav>
          </div>

          <!-- Column 4: General Enquiries & Social -->
          <div class="mt-4.5">
            <h3 class="mb-5 text-gray-800 font-semibold text-[1.25rem]">General Enquiries</h3>
            <div class="flex items-start gap-4 text-gray-600">
              <Icon name="material-symbols:location-on-outline" size="22" class="w-6 h-6 text-scintl-green flex-shrink-0 mt-1" />
              <span>Plot 35 Kenneth Dale Drive, Kamwokya-Kampala, Uganda</span>
            </div>
            
            <hr class="mt-8 mb-2.5 text-gray-400" />
            
            <div>
              <h3 class="mb-6.5 mt-7.5 text-gray-800 font-semibold text-[1.25rem]">Social Media</h3>
              <div class="flex items-center gap-1.5">
                <NuxtLink 
                  to="https://www.facebook.com/ScintlUG" 
                  class="flex items-center shrink-0 p-2 rounded-full hover:bg-scintl-green/10 transition-all"
                  aria-label="Facebook"
                >
                  <Icon name="ri:facebook-fill" class="w-6 h-6 text-gray-600 hover:text-scintl-green transition-colors" />
                </NuxtLink>
                <NuxtLink 
                  to="https://www.linkedin.com/company/scintl-ltd/" 
                  class="flex items-center shrink-0 p-2 rounded-full hover:bg-scintl-green/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Icon name="ri:linkedin-fill" class="w-8 h-8 text-gray-600 hover:text-scintl-green transition-colors" />
                </NuxtLink>
                <NuxtLink 
                  to="http://www.twitter.com/ScintlUG" 
                  class="flex items-center shrink-0 p-2 rounded-full hover:bg-scintl-green/10 transition-all"
                  aria-label="Twitter / X"
                >
                  <Icon name="ri:twitter-x-fill" class="w-8 h-8 text-gray-600 hover:text-scintl-green transition-colors" />
                </NuxtLink>
                <NuxtLink 
                  to="https://www.instagram.com/scintl_ug" 
                  class="flex items-center shrink-0 p-2 rounded-full hover:bg-scintl-green/10 transition-all"
                  aria-label="Instagram"
                >
                  <Icon name="ri:instagram-fill" class="w-8 h-8 text-gray-600 hover:text-scintl-green transition-colors" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="pt-8 text-center text-gray-600 text-sm">
        <p>&copy; {{ currentYear }} SCINTL LTD. All rights reserved</p>
      </div>
    </div>
  </section>
</template>