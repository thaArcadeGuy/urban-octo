<script setup>
defineProps({
  tagline: String,  // "Who We Are"
  heading: String,  // "Our Expertise & Global Partnerships"
})
</script>

<template>
  <div class="text-center mb-12">
    <h5 class="text-scintl-green font-semibold text-[1rem] uppercase tracking-wider">
      {{ tagline }}
    </h5>
    <h2 class="max-w-[600px] m-auto text-3xl md:text-4xl font-bold text-gray-800 mt-2 font-heading">
      {{ heading }}
    </h2>
  </div>
</template>