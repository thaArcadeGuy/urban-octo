<template>
  <section class="py-16 bg-[#E8F5E9]">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image Column -->
        <div class="order-2 lg:order-1">
          <NuxtImg
            src="/img/about/team.jpg"
            alt="SCINTL Team"
            class="rounded-xl shadow-lg w-full h-auto"
            loading="lazy"
          />
        </div>

        <!-- Content Column -->
        <div class="order-1 lg:order-2">
          <SharedSectionHeader tagline="Who We Are" heading="Local Expertise. Global Partnerships." alignment="left"/>
          
          <p class="text-gray-700 leading-relaxed mt-4 mb-4">
            SCINTL Ltd is a privately held Ugandan ICT enterprise headquartered in Kampala. 
            We are dedicated to providing efficient, safe, and secure technology solutions that drive 
            growth and deliver a measurable return on investment for our partners.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Since 2008, our team of experts has committed to delivering excellence in every project; from initial consultation through to ongoing support and maintenance.
          </p>
          
          <div class="mt-4 space-y-3">
            <h5 class="text-scintl-green font-bold">Our Mission</h5>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">We ensure clients with faster adoption and return on investment across IT solutions from application and technology solutions to systems.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>