<script setup lang="ts">
interface WhyCard {
  id: number
  icon: string
  title: string
  description: string
  stat?: string
}

const getWhyCards = () => {
  const year = new Date().getFullYear()
  const yearsOfImpact = year - 2008
  
  return [
    {
      id: 1,
      icon: 'material-symbols:rocket-launch',
      title: 'Meaningful Projects',
      description: 'Work on technology solutions that transform businesses and communities across Africa.',
      stat: `${yearsOfImpact}+ years of impact`
    },
    {
      id: 2,
      icon: 'material-symbols:groups',
      title: 'Global Partnerships',
      description: 'Collaborate with world-class partners like Microsoft, Oracle, and Thales.',
      stat: '8+ global partners'
    },
    {
      id: 3,
      icon: 'material-symbols:bar-chart',
      title: 'Growth & Development',
      description: 'Invest in your career with continuous learning, mentorship, and growth opportunities.',
      stat: 'Continuous learning'
    },
    {
      id: 4,
      icon: 'material-symbols:favorite',
      title: 'Values-Driven Culture',
      description: 'Join a team built on integrity, teamwork, innovation, and a shared mission.',
      stat: '100% values-led'
    },
  ]
}

const whyCards = getWhyCards()
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <SharedSectionHeader
        tagline="Why SCINTL"
        heading="A Place to Grow, Innovate, and Lead"
        alignment="center"
        heading-max-width="700px"
      >
        <template #after-heading>
          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
            At SCINTL, we believe in fostering a culture of integrity, teamwork, and innovation. 
            We invest in our people, providing opportunities to work on impactful projects with 
            global partners like Microsoft, Oracle, and Thales.
          </p>
        </template>
      </SharedSectionHeader>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div 
          v-for="card in whyCards" 
          :key="card.id"
          class="bg-[#E5F0F7] rounded-xl p-6 hover:shadow-lg hover:bg-[#E8F5E9] transition-all duration-300 hover:-translate-y-1 group"
        >
          <div class="w-14 h-14 bg-scintl-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-scintl-green/20 transition-colors">
            <Icon :name="card.icon" class="w-7 h-7 text-scintl-green" />
          </div>
          <h3 class="text-lg font-semibold text-gray-800 hover:text-scintl-green">{{ card.title }}</h3>
          <p class="text-gray-600 text-sm mt-2 leading-relaxed">{{ card.description }}</p>
          <p v-if="card.stat" class="text-scintl-green font-semibold text-sm mt-3 border-t border-gray-200 pt-3">
            {{ card.stat }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>