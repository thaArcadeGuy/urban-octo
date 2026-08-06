<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

interface Testimonial {
  id: number
  quote: string
  name: string
  position: string
  company: string
  logo: string
  photo: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "SCINTL's identity verification solution transformed our border management operations. The system is reliable, secure, and has significantly reduced processing times.",
    name: "John Mukasa",
    position: "Director of Immigration",
    company: "Uganda Police Forces",
    logo: "/img/partners/upf.png",
    photo: "/img/testimonials/john-mukasa.jpg"
  },
  {
    id: 2,
    quote: "We partnered with SCINTL to implement a national ID verification system. Their expertise and global partnerships delivered a solution that exceeded our expectations.",
    name: "Sarah Nalubega",
    position: "Head of Technology",
    company: "NSSF Uganda",
    logo: "/img/partners/nssf.png",
    photo: "/img/testimonials/sarah-nalubega.jpg"
  },
  {
    id: 3,
    quote: "The document verification platform SCINTL built for us has streamlined our customer onboarding process. We've seen a 40% reduction in verification time.",
    name: "David Okello",
    position: "Chief Operating Officer",
    company: "MTN Uganda",
    logo: "/img/partners/mtn.png",
    photo: "/img/testimonials/david-okello.jpg"
  },
  {
    id: 4,
    quote: "SCINTL delivered a comprehensive voter authentication system that ensured transparency and security in our electoral process. Their team's dedication was exceptional.",
    name: "Grace Achieng",
    position: "Electoral Commissioner",
    company: "Uganda Electoral Commission",
    logo: "/img/partners/uec.jpeg",
    photo: "/img/testimonials/grace-achieng.jpg"
  },
  {
    id: 5,
    quote: "From healthcare verification to mobile ID solutions, SCINTL has been a trusted partner in our digital transformation journey across Africa.",
    name: "Michael Ntambi",
    position: "Regional Director",
    company: "Facephi",
    logo: "/img/partners/facephi.png",
    photo: "/img/testimonials/michael-ntambi.jpg"
  }
]

const currentSlide = ref(0)
const isTransitioning = ref(false)

const nextSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentSlide.value = (currentSlide.value + 1) % testimonials.length
  setTimeout(() => {
    isTransitioning.value = false
  }, 500)
}

const prevSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentSlide.value = currentSlide.value === 0 
    ? testimonials.length - 1 
    : currentSlide.value - 1
  setTimeout(() => {
    isTransitioning.value = false
  }, 500)
}

const goToSlide = (index: number) => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentSlide.value = index
  setTimeout(() => {
    isTransitioning.value = false
  }, 500)
}

// Auto-advance
let autoAdvanceInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  autoAdvanceInterval = setInterval(() => {
    if (!isTransitioning.value) {
      nextSlide()
    }
  }, 6000)
})

onUnmounted(() => {
  if (autoAdvanceInterval) {
    clearInterval(autoAdvanceInterval)
  }
})

// Pause on hover
const pauseAutoAdvance = () => {
  if (autoAdvanceInterval) {
    clearInterval(autoAdvanceInterval)
    autoAdvanceInterval = null
  }
}

const resumeAutoAdvance = () => {
  if (!autoAdvanceInterval) {
    autoAdvanceInterval = setInterval(() => {
      if (!isTransitioning.value) {
        nextSlide()
      }
    }, 6000)
  }
}
</script>

<template>
  <section 
    class="py-16 bg-gray-50"
    @mouseenter="pauseAutoAdvance"
    @mouseleave="resumeAutoAdvance"
  >
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h5 class="text-scintl-green font-semibold text-[1rem] uppercase tracking-wider">
          Testimonials
        </h5>
        <h2 class="max-w-[600px] m-auto text-3xl md:text-4xl font-bold text-gray-800 mt-2 font-heading">
          What Some of Our Partners and Clients Have to Say
        </h2>
      </div>

      <!-- Testimonial Cards - Desktop Carousel -->
      <div class="relative">
        <!-- Navigation Buttons -->
        <button 
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all hover:bg-scintl-green hover:text-white group"
          aria-label="Previous testimonial"
        >
          <Icon 
            name="heroicons:chevron-left-20-solid" 
            class="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-white transition-colors"
          />
        </button>
        
        <button 
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all hover:bg-scintl-green hover:text-white group"
          aria-label="Next testimonial"
        >
          <Icon 
            name="heroicons:chevron-right-20-solid" 
            class="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-white transition-colors"
          />
        </button>

        <!-- Testimonial Cards -->
        <div class="overflow-hidden ">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div 
              v-for="testimonial in testimonials" 
              :key="testimonial.id"
              class="w-full flex-shrink-0 px-4"
            >
              <div class="max-w-4xl mx-auto bg-[#E8F5E9] rounded-2xl border border-2 border-gray-200 p-6 md:p-8 lg:p-10">
                <!-- Top Row: Logo + Quote Icon -->
                <div class="flex justify-between items-center mb-4">
                  <!-- Logo -->
                  <div class="flex items-center gap-3">
                    <img 
                      :src="testimonial.logo" 
                      :alt="testimonial.company"
                      class="h-8 md:h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                  
                  <!-- Quote Icon -->
                  <div class="text-scintl-green">
                    <Icon 
                      name="material-symbols:format-quote-outline" 
                      size="48"
                      class="opacity-70"
                    />
                  </div>
                </div>

                <!-- Quote -->
                <blockquote class="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  "{{ testimonial.quote }}"
                </blockquote>

                <!-- Bottom Row: Photo + Name/Position -->
                <div class="flex items-center gap-4">
                  <!-- Photo Placeholder -->
                  <div class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-scintl-green/10 overflow-hidden flex items-center justify-centerr">
                    <img 
                      :src="testimonial.photo"
                      :alt="testimonial.name"
                      class="w-full h-full object-cover" 
                      
                    />
                  </div>
                  
                  <div>
                    <p class="font-semibold text-gray-800 text-sm md:text-base">
                      {{ testimonial.name }}
                    </p>
                    <p class="text-gray-500 text-xs md:text-sm">
                      {{ testimonial.position }}, {{ testimonial.company }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dot Indicators -->
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="[
              currentSlide === index 
                ? 'bg-scintl-green w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            ]"
            :aria-label="`Go to testimonial ${index + 1}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth transitions */
.transition-transform {
  transition-property: transform;
}

/* Optional: Add a subtle gradient fade on edges */
@media (min-width: 768px) {
  .overflow-hidden {
    mask-image: linear-gradient(
      to right,
      transparent,
      black 10%,
      black 90%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      black 10%,
      black 90%,
      transparent
    );
  }
}
</style>