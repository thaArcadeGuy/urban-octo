<template>
  <div>
    <SharedPageHero
      background-image="/img/about/about-hero.jpg"
      tagline="About Us"
      headline="Ugandan-owned ICT Expertise.<br />"
      headline-highlight="Global Technology Partnerships."
      paragraph=" SCINTL is a Ugandan owned ICT enterprise that implements large-scale technology projects and develops custom software for local and international clients. We bridge the gap between global innovation and local execution."
    />
    <AboutUs />
    <AboutValues />
    <AboutPartners />
    <AboutFocusAreas />
    <AboutImpact />

    <!-- Our Impact Section -->
    <!-- <section class="py-16 bg-scintl-blue text-white">
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
    </section> -->

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