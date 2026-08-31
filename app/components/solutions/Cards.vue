<script lang="ts" setup>
const solutions = [
  {
    id: 1, 
    icon: "material-symbols:cloud-outline", 
    title: "Cloud", 
    description: "Scalable cloud infrastructure for data storage, servers, and networking accessible on demand.",
    link: "solutions/cloud"
  },
  {
    id: 2, 
    icon: "material-symbols:security-outline", 
    title: "Cybersecurity", 
    description: "Multi-layered security strategies that protect your computers, networks, and sensitive data.",
    link: "solutions/security"
  },
  {
    id: 3, 
    icon: "material-symbols:memory-outline", 
    title: "Technology", 
    description: "End-to-end implementation of people, processes, and technology to solve business problems.",
    link: "solutions/tech"
  },
  {
    id: 4, 
    icon: "material-symbols:apartment-outline", 
    title: "Enterprise", 
    description: "Integrated business systems that unify company operations through seamless information exchange.",
    link: "solutions/enterprise"
  }
]
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Solutions Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div v-for="solution in solutions" :key="solution.id" 
             class="flex flex-col justify-between p-6 bg-[#E5F0F7] rounded-xl hover:shadow-lg transition-shadow hover:bg-[#E8F5E9]">
          <Icon :name="solution.icon"
          size="50" class="text-scintl-green" />
          <h3 class="text-[1.5rem] font-semibold text-gray-800 mt-4 hover:text-scintl-green transi">{{ solution.title }}</h3>
          <p class="text-gray-600 mt-2 text-[1rem]">{{ solution.description }}</p>
          <NuxtLink 
            :to="solution.link" 
            class="max-w-35 group relative hidden laptop:inline-flex overflow-hidden bg-scintl-blue px-8 py-3 rounded text-white font-medium mt-4 inline-block"
          >
            <span
              class="absolute inset-0 -translate-x-full bg-scintl-green transition-transform duration-500 ease-in-out group-hover:translate-x-0"
            ></span>
            <span class="relative z-10">
              Explore >
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>