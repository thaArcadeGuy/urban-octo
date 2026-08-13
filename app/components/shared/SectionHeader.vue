<script setup lang="ts">
interface Props {
  tagline?: string
  heading: string
  alignment?: 'left' | 'center' | 'right'
  headingMaxWidth?: string
  taglineColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  tagline: '',
  alignment: 'center',
  headingMaxWidth: '600px',
  taglineColor: 'text-scintl-green',
})

const alignmentClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const marginClasses = {
  left: 'ml-0',
  center: 'mx-auto',
  right: 'ml-auto',
}
</script>

<template>
  <div :class="alignmentClasses[alignment]">
    <h5 
      v-if="tagline"
      class="font-semibold text-[1rem] uppercase tracking-wider"
      :class="taglineColor"
    >
      {{ tagline }}
    </h5>
    <h2 
      class="text-3xl md:text-4xl font-bold text-gray-800 mt-2 font-heading"
      :class="marginClasses[alignment]"
      :style="{ maxWidth: headingMaxWidth }"
    >
      {{ heading }}
    </h2>
    <slot name="after-heading"></slot>
  </div>
</template>