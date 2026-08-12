<!-- <template>
  <section class="">
    <div class="">
      <div class="">
        <div class="">
          <h5>What We Do</h5>
        </div>
        <div class="">
          <h2>Technology Solutions That Drive Business Growth</h2>
        </div>
      </div>
      <div class="">
        <div class="">
          <div class="">
            <Icon
              name="material-symbols:cloud-outline"
              size="22"
            />
          </div>
          <div class="">
            <h3>Cloud</h3>
            <p>Scalable cloud infrastructure that delivers data storage, servers, databases, networking, and software through the internet. We help you save files to remote databases and retrieve them on demand—reducing infrastructure costs while improving accessibility and disaster recovery.</p>
          </div>
          <div class="">
            <NuxtLink
              to="/cloud"
              class="group relative hidden laptop:inline-flex overflow-hidden rounded bg-[#0A4A6E] px-8 py-3 font-medium text-white"
            >
              <span
                class="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 ease-in-out group-hover:translate-x-0"
              ></span>

              <span class="relative z-10">
                Learn More
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template> -->
<script lang="ts" setup>
const solutions = [
  {
    id: 1, 
    icon: "material-symbols:cloud-outline", 
    title: "Cloud", 
    description: "Scalable cloud infrastructure for data storage, servers, and networking accessible on demand.",
    link: "/cloud"
  },
  {
    id: 2, 
    icon: "material-symbols:security-outline", 
    title: "Cybersecurity", 
    description: "Multi-layered security strategies that protect your computers, networks, and sensitive data.",
    link: "/security"
  },
  {
    id: 3, 
    icon: "material-symbols:memory-outline", 
    title: "Technology", 
    description: "End-to-end implementation of people, processes, and technology to solve business problems.",
    link: "/tech"
  },
  {
    id: 4, 
    icon: "material-symbols:apartment-outline", 
    title: "Enterprise", 
    description: "Integrated business systems that unify company operations through seamless information exchange.",
    link: "/enterprise"
  }
]
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="flex flex-col items-start md:items-center md:text-center mb-12">
        <h5 class="text-scintl-green font-semibold text-[1rem] uppercase tracking-wider">
          What We Do
        </h5>
        <h2 class="max-w-[600px] text-3xl md:text-4xl font-bold text-gray-800 mt-2 font-heading">
          Technology Solutions That Drive Business Growth
        </h2>
      </div>

      <!-- Solutions Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="solution in solutions" :key="solution.id" 
             class="flex flex-col justify-between p-6 bg-[#E5F0F7] rounded-xl hover:shadow-lg transition-shadow hover:bg-[#E8F5E9]">
          <Icon :name="solution.icon"
          size="50" class="text-scintl-green" />
          <h3 class="text-[1.5rem] font-semibold text-gray-800 mt-4 hover:text-scintl-green">{{ solution.title }}</h3>
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