<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

interface ProcessStep {
  id: number
  number: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
}

const activeStep = ref(0)

let autoAdvanceInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  autoAdvanceInterval = setInterval(() => {
    activeStep.value = (activeStep.value + 1) % steps.length
  }, 5000)
})

onUnmounted(() => {
  if (autoAdvanceInterval) clearInterval(autoAdvanceInterval)
})

const steps: ProcessStep[] = [
  {
    id: 1,
    number: '01',
    title: 'Consulting',
    shortDescription: 'Understand your needs',
    fullDescription: 'We start by understanding your business goals, challenges, and technical requirements. Our consultants work closely with your team to identify opportunities and build a solution that fits your unique needs and budget.',
    image: '/img/process/consulting.jpg'
  },
  {
    id: 2,
    number: '02',
    title: 'Design & Development',
    shortDescription: 'Build tailored solutions',
    fullDescription: 'Our experts design and develop custom solutions using proven frameworks, agile methodologies, and the latest technologies. We build scalable, secure, and user-friendly systems that solve your business problems.',
    image: '/img/process/development.jpg'
  },
  {
    id: 3,
    number: '03',
    title: 'Implementation',
    shortDescription: 'Deploy with minimal disruption',
    fullDescription: 'We deploy your solution with careful planning, thorough testing, and minimal disruption to your daily operations. Our team ensures a smooth transition with comprehensive training and support.',
    image: '/img/process/server.jpg'
  },
  {
    id: 4,
    number: '04',
    title: 'Support & Maintenance',
    shortDescription: 'Ensure long-term success',
    fullDescription: 'We provide ongoing support, maintenance, and training to keep your systems running smoothly. Our dedicated team is always available to ensure your technology continues to deliver results.',
    image: '/img/process/supporrt.jpeg'
  }
]

const isActive = (index: number) => {
  return index === activeStep.value
}
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h5 class="text-scintl-green font-semibold text-[1rem] uppercase tracking-wider">
          How We Work
        </h5>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mt-2 font-heading">
          A Proven Path to Results
        </h2>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
          Our implementation process is designed to reduce risk, accelerate adoption, and deliver measurable ROI.
        </p>
      </div>

      <!-- Process Cards - Desktop -->
      <div class="hidden md:flex flex-row gap-4 min-h-[400px]">
        <div
          v-for="(step, index) in steps"
          :key="step.id"
          @click="activeStep = index"
          class="relative transition-all duration-500 ease-in-out cursor-pointer rounded-xl overflow-hidden border-2"
          :class="[
            isActive(index) ? 'flex-[3] border-scintl-green' : 'flex-1 border-transparent',
            isActive(index) ? 'shadow-lg' : 'shadow-sm hover:shadow-md'
          ]"
        >
          <!-- Background Image -->
          <div 
            class="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            :class="isActive(index) ? 'scale-110' : 'scale-100'"
            :style="{ backgroundImage: `url(${step.image})` }"
          ></div>
          
          <!-- Overlay -->
          <div 
            class="absolute inset-0 transition-all duration-500"
            :class="isActive(index) ? 'bg-black/40' : 'bg-black/70'"
          ></div>

          <!-- Content -->
          <div class="relative z-10 p-6 h-full flex flex-col justify-end">
            <!-- Step Number -->
            <span 
              class="text-5xl md:text-6xl font-bold transition-all duration-500"
              :class="isActive(index) ? 'text-white/80' : 'text-white/30'"
            >
              {{ step.number }}
            </span>
            
            <!-- Title -->
            <h3 class="text-xl font-semibold text-white mt-2">
              {{ step.title }}
            </h3>
            
            <!-- Short Description -->
            <p class="text-sm text-white/80 mt-2">
              {{ step.shortDescription }}
            </p>
            
            <!-- Full Description (Visible Only When Active) -->
            <div 
              class="overflow-hidden transition-all duration-500"
              :class="isActive(index) ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'"
            >
              <p class="text-sm text-white/90 border-t border-white/20 pt-4">
                {{ step.fullDescription }}
              </p>
              <!-- <div class="mt-4 flex items-center gap-2 text-white/80 text-sm font-medium">
                <span>Learn more</span>
                <Icon name="heroicons:arrow-right-20-solid" class="w-4 h-4" />
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <!-- Process Cards - Mobile (Accordion) -->
      <div class="md:hidden space-y-3">
        <div
          v-for="(step, index) in steps"
          :key="step.id"
          class="rounded-xl overflow-hidden border-2 transition-all duration-500"
          :class="activeStep === index ? 'border-scintl-green shadow-lg' : 'border-transparent shadow-sm'"
        >
          <button
            @click="activeStep = index"
            class="w-full text-left p-4 bg-white flex items-center justify-between"
          >
            <div class="flex items-center gap-3">
              <span class="text-2xl font-bold text-scintl-green">
                {{ step.number }}
              </span>
              <div>
                <h3 class="font-semibold text-gray-800">{{ step.title }}</h3>
                <p class="text-sm text-gray-500">{{ step.shortDescription }}</p>
              </div>
            </div>
            <Icon 
              :name="activeStep === index ? 'heroicons:minus-20-solid' : 'heroicons:plus-20-solid'" 
              class="w-5 h-5 text-scintl-green flex-shrink-0"
            />
          </button>
          
          <!-- Expanded Content (Mobile) -->
          <div 
            class="overflow-hidden transition-all duration-500 bg-gray-50"
            :class="activeStep === index ? 'max-h-60 p-4' : 'max-h-0 p-0'"
          >
            <p class="text-sm text-gray-700">
              {{ step.fullDescription }}
            </p>
            <!-- <div class="mt-3">
              <NuxtLink 
                :to="`/process#step-${step.id}`" 
                class="text-scintl-green font-medium text-sm hover:underline inline-flex items-center gap-1"
              >
                Learn more
                <Icon name="heroicons:arrow-right-20-solid" class="w-4 h-4" />
              </NuxtLink>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth transitions for the desktop cards */
.relative {
  transition: flex 0.5s ease-in-out;
}

/* Ensure content doesn't overflow */
.overflow-hidden {
  overflow: hidden;
}

/* Optional: Add a subtle glow to the active card */
.border-scintl-green {
  box-shadow: 0 0 20px rgba(125, 189, 74, 0.15);
}
</style>