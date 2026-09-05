<script setup lang="ts">
interface Props {
  backgroundImage: string
  tagline?: string
  headline: string
  headlineHighlight?: string
  paragraph: string
  alignment?: 'left' | 'center' | 'right'
  overlayOpacity?: number // 0 to 100
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  tagline: '',
  headlineHighlight: '',
  alignment: 'center',
  overlayOpacity: 60,
  className: '',
})

const alignmentClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const overlayOpacityClass = computed(() => {
  const opacity = Math.min(Math.max(props.overlayOpacity, 0), 100)
  return `bg-black/${opacity}`
})
</script>

<template>
  <section 
    class="relative py-20 mt-20 md:py-28  lg:py-36 overflow-hidden"
    :class="className"
  >
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    ></div>
    
    <!-- Overlay -->
    <div 
      class="absolute inset-0"
      :class="overlayOpacityClass"
    ></div>
    
    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4">
      <div 
        class="max-w-4xl"
        :class="[
          alignmentClasses[alignment],
          alignment === 'center' ? 'mx-auto' : ''
        ]"
      >
        <!-- Tagline -->
        <h5 
          v-if="tagline"
          class="text-scintl-green font-semibold text-[1rem] uppercase tracking-wider"
        >
          {{ tagline }}
        </h5>
        
        <!-- Headline -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl laptop:text-6xl font-bold text-white font-heading leading-tight mt-2">
          <span v-html="headline"></span>
          <span 
            v-if="headlineHighlight"
            class="text-scintl-green"
            v-html="headlineHighlight"
          ></span>
        </h1>
        
        <!-- Paragraph -->
        <p 
          class="text-white/80 mt-4 sm:text-lg md:mt-6 text-base leading-relaxed max-w-3xl laptop:text-lg desktop:text-xl"
          :class="alignment === 'center' ? 'mx-auto' : ''"
          v-html="paragraph"
        ></p>
        
        <!-- Slot for additional content (e.g., partner logos, buttons) -->
        <slot name="after-paragraph"></slot>
      </div>
    </div>
  </section>
</template>

<style scoped>
.relative {
  background-attachment: fixed;
}
</style>