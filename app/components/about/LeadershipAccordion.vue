<!-- components/about/AboutLeadershipAccordion.vue -->
<script setup lang="ts">
import type { TeamMember } from '~/composables/useLeadershipTeam'

defineProps<{
  member: TeamMember
  isOpen: boolean
}>()

const emit = defineEmits<{
  toggle: [id: number]
}>()
</script>

<template>
  <div 
    class=" overflow-hidden duration-300  border-b "
    :class="isOpen ? 'border-scintl-green' : 'border-gray-700/50'"
  >
    <!-- Header -->
    <button
      @click="emit('toggle', member.id)"
      class="w-full flex items-center gap-4 p-4 md:p-6 text-left transition-colors duration-200 "
      :aria-expanded="isOpen"
    >
      <!-- Profile Image -->
      <div class="flex-shrink-0">
        <div 
          class="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-scintl-green/10"
        >
          <NuxtImg
            :src="member.image"
            :alt="member.name"
            class="w-full h-full object-cover"
            loading="lazy"
            width="64"
            height="64"
            format="webp"
          />
        </div>
      </div>

      <!-- Name & Position -->
      <div class="flex-1 min-w-0">
        <h3 class="font-semibold text-gray-800 text-sm md:text-base">
          {{ member.name }}
        </h3>
        <p class="text-gray-500 text-xs md:text-sm">
          {{ member.position }}
        </p>
      </div>

      <!-- Toggle Icon -->
      <div class="flex-shrink-0 ml-2">
        <Icon 
          :name="isOpen ? 'heroicons:minus-20-solid' : 'heroicons:plus-20-solid'"
          class="w-5 h-5 text-scintl-green transition-transform duration-300 cursor-pointer"
          :class="isOpen ? 'rotate-0' : 'rotate-0'"
        />
      </div>
    </button>

    <!-- Expanded Content -->
    <Transition
      enter-active-class="transition-all duration-300 ease-in-out"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-[500px] opacity-100"
      leave-active-class="transition-all duration-300 ease-in-out"
      leave-from-class="max-h-[500px] opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div v-if="isOpen" class="px-4 md:px-6 pb-4 md:pb-6">
        <div class="border-t border-gray-200 pt-4">
          <!-- Bio -->
          <p class="text-gray-600 text-sm md:text-base leading-relaxed">
            {{ member.bio }}
          </p>

          <!-- Social / Contact Links -->
          <div class="mt-4 flex flex-wrap items-center gap-4">
            <a 
              v-if="member.email"
              :href="`mailto:${member.email}`"
              class="text-sm text-gray-500 hover:text-scintl-green transition-colors flex items-center gap-2"
            >
              <Icon name="heroicons:envelope-20-solid" class="w-4 h-4" />
              {{ member.email }}
            </a>
            <a 
              v-if="member.linkedin"
              :href="member.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-gray-500 hover:text-scintl-green transition-colors flex items-center gap-2"
            >
              <Icon name="ri:linkedin-fill" class="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Smooth height transitions */
.max-h-0 {
  max-height: 0;
}
.max-h-\[500px\] {
  max-height: 500px;
}
</style>