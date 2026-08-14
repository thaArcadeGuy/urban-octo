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
    <AboutLeadership />


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