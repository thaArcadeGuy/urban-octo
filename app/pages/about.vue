<template>
  <div>
    <!-- Hero / Value Proposition Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl md:text-5xl font-bold text-gray-800 font-heading leading-tight">
            Ugandan-owned ICT Expertise.<br />
            <span class="text-scintl-green">Global Technology Partnerships.</span>
          </h1>
          <p class="text-gray-600 mt-6 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            SCINTL is a Ugandan-owned ICT enterprise that implements large-scale technology 
            projects and develops custom software for local and international clients. 
            We bridge the gap between global innovation and local execution.
          </p>
        </div>
      </div>
    </section>

    <!-- Who We Are Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 font-heading text-center mb-8">
            Who We Are
          </h2>
          <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>SCINTL Ltd</strong> is a privately held Ugandan ICT enterprise headquartered in Kampala. 
              We are dedicated to providing efficient, safe, and secure technology solutions that drive 
              growth and deliver a measurable return on investment for our partners.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Our team of experts is committed to delivering excellence in every project—from initial 
              consultation through to ongoing support and maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Expertise & Partnerships Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 font-heading text-center mb-8">
            Our Expertise & Global Partnerships
          </h2>
          
          <!-- Partnerships -->
          <div class="mb-10">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Global Technology Partners</h3>
            <p class="text-gray-600 mb-6">
              We partner with world-class technology leaders to deliver best-in-class solutions to our clients:
            </p>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div 
                v-for="partner in partners" 
                :key="partner.id"
                class="bg-gray-50 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <img 
                  :src="partner.logo" 
                  :alt="partner.name"
                  class="max-h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <!-- Strategic Partnership Highlight -->
          <div class="bg-[#E5F0F7] rounded-xl p-6 md:p-8">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Strategic Partnership</h3>
            <p class="text-gray-700 leading-relaxed">
              SCINTL has partnered with <strong>Facephi</strong>, a global leader in digital identity solutions, 
              to deliver advanced identity verification and authentication systems in Uganda. 
              This partnership enables us to provide cutting-edge solutions for national IDs, 
              border management, voter authentication, and healthcare verification.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Focus Areas Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 font-heading text-center mb-8">
            Our Focus Areas
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="focus in focusAreas" :key="focus.id" class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div class="flex items-start gap-4">
                <Icon :name="focus.icon" class="w-8 h-8 text-scintl-green flex-shrink-0" />
                <div>
                  <h3 class="font-semibold text-gray-800">{{ focus.title }}</h3>
                  <p class="text-gray-600 text-sm mt-1">{{ focus.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Impact Section -->
    <section class="py-16 bg-scintl-blue text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-2xl md:text-3xl font-bold font-heading mb-8">
            Our Impact
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 class="text-xl font-semibold mb-2">Kampala Public Bus Network</h3>
              <p class="text-white/80 text-sm">
                SCINTL provided local infrastructure and support for the implementation of 
                Optibus technology, helping modernize public transportation in Kampala.
              </p>
            </div>
            <div class="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 class="text-xl font-semibold mb-2">Co-Bank+ Banking Solution</h3>
              <p class="text-white/80 text-sm">
                Our enterprise software solution sets new standards for financial institutions 
                in Uganda, delivering secure and efficient core banking services to SACCOs and MFIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet the Team (Future Addition - Placeholder) -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 font-heading mb-4">
            Meet Our Leadership
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto mb-8">
            Our team of dedicated professionals brings decades of combined experience in technology, 
            business development, and project management.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div class="w-20 h-20 rounded-full bg-scintl-green/20 flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-scintl-green">CT</span>
              </div>
              <h3 class="font-semibold text-gray-800">Cephas T. Bushuyu</h3>
              <p class="text-gray-500 text-sm">Managing Director</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div class="w-20 h-20 rounded-full bg-scintl-green/20 flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-scintl-green">AT</span>
              </div>
              <h3 class="font-semibold text-gray-800">Amani Tindyebwa</h3>
              <p class="text-gray-500 text-sm">Business Development Manager</p>
            </div>
          </div>
          <p class="text-gray-400 text-sm mt-6 italic">
            * Team photos coming soon
          </p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-scintl-green">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl md:text-4xl font-bold text-white font-heading">
            Ready to Discuss Your Next Project?
          </h2>
          <p class="text-white/90 mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Let's talk about how SCINTL can help you achieve your technology goals.
          </p>
          <div class="mt-8">
            <NuxtLink 
              to="/contact" 
              class="inline-block bg-white text-scintl-green px-10 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Contact Our Experts →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const partners = [
  { id: 1, name: 'Microsoft', logo: '/img/partners/microsoft.png' },
  { id: 2, name: 'Oracle', logo: '/img/partners/oracle.png' },
  { id: 3, name: 'IBM', logo: '/img/partners/ibm.png' },
  { id: 4, name: 'Thales', logo: '/img/partners/thales.png' },
  { id: 5, name: 'Regula', logo: '/img/partners/regula.png' },
  { id: 6, name: 'Optibus', logo: '/img/partners/optibus.png' },
  { id: 7, name: 'Facephi', logo: '/img/partners/facephi.png' },
  { id: 8, name: 'HP', logo: '/img/partners/hp.png' },
]

const focusAreas = [
  {
    id: 1,
    icon: 'material-symbols:cloud-outline',
    title: 'Cloud & Infrastructure',
    description: 'Scalable cloud solutions and IT infrastructure for businesses and government.'
  },
  {
    id: 2,
    icon: 'material-symbols:security-outline',
    title: 'Cybersecurity',
    description: 'Comprehensive security strategies to protect your data and systems.'
  },
  {
    id: 3,
    icon: 'material-symbols:featured-seal-outline',
    title: 'Digital Identity & Verification',
    description: 'Identity solutions for national IDs, border management, and voter authentication.'
  },
  {
    id: 4,
    icon: 'material-symbols:apartment-outline',
    title: 'Enterprise Software',
    description: 'Custom enterprise solutions including Co-Bank+ for financial institutions.'
  },
  {
    id: 5,
    icon: 'material-symbols:code-outline',
    title: 'Custom Software Development',
    description: 'Tailored software development for local and international clients.'
  },
  {
    id: 6,
    icon: 'material-symbols:engineering-outline',
    title: 'Implementation & Support',
    description: 'End-to-end implementation and ongoing support for all solutions.'
  },
]
</script>