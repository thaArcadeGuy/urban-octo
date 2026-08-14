<script setup lang="ts">
import { ref } from 'vue'
import { useLeadershipTeam } from '~/composables/useLeadershipTeam'

const { team } = useLeadershipTeam()
const openMemberId = ref<number | null>(null)

const toggleMember = (id: number) => {
  openMemberId.value = openMemberId.value === id ? null : id
}
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <SharedSectionHeader
        tagline="Our Leadership"
        heading="Meet Our Leadership Team"
        alignment="center"
        heading-max-width="700px"
      >
        <template #after-heading>
          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our team of dedicated professionals brings decades of combined experience in technology, 
            business development, and project management.
          </p>
        </template>
      </SharedSectionHeader>

      <!-- Accordion List -->
      <div class="max-w-3xl mx-auto mt-12 space-y-3">
        <AboutLeadershipAccordion
          v-for="member in team"
          :key="member.id"
          :member="member"
          :is-open="openMemberId === member.id"
          @toggle="toggleMember"
        />
      </div>
    </div>
  </section>
</template>