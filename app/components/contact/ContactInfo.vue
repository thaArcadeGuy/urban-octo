<template>
  <div class="flex items-center justify-center mb-4">
    <h2 class="max-w-[600px] text-3xl md:text-4xl font-bold text-gray-800 font-heading">Get In Touch</h2>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Contact Card -->
    <div class="relative flex flex-col justify-between p-6 bg-[#E5F0F7] rounded-xl hover:shadow-lg transition-shadow hover:bg-[#E8F5E9] overflow-hidden min-h-[180px]">
      <!-- Background Icon -->
      <div class="absolute top-1/2 -translate-y-1/2 -right-9 opacity-80 pointer-events-none">
        <Icon 
          name="material-symbols:mail-outline" 
          size="100"
          class="text-scintl-green"
        />
      </div>
      <div class="relative z-10">
        <h3 class="text-[1.5rem] font-semibold text-gray-800 hover:text-scintl-green transition-colors">
          Contact
        </h3>
        <div class="mt-4 space-y-2 text-gray-600">
          <p class="flex items-center gap-2">
            <Icon name="heroicons:phone-20-solid" class="w-4 h-4 text-scintl-green" />
            <a href="tel:+256775212108" class="hover:text-scintl-green transition-colors">+256 775 212 108</a>
          </p>
          <p class="flex items-center gap-2">
            <Icon name="heroicons:envelope-20-solid" class="w-4 h-4 text-scintl-green" />
            <a href="mailto:info@scintl.co.ug" class="hover:text-scintl-green transition-colors">info@scintl.co.ug</a>
          </p>
        </div>
      </div>
    </div>

    <!-- Hours Card -->
    <div class="relative flex flex-col justify-between p-6 bg-[#E5F0F7] rounded-xl hover:shadow-lg transition-shadow hover:bg-[#E8F5E9] overflow-hidden min-h-[180px]">
      <!-- Background Icon -->
      <div class="absolute top-1/2 -translate-y-1/2 -right-9 opacity-80 pointer-events-none">
        <Icon 
          name="material-symbols:schedule-outline" 
          size="100"
          class="text-scintl-green"
        />
      </div>
      <div class="relative z-10">
        <h3 class="text-[1.5rem] font-semibold text-gray-800 hover:text-scintl-green transition-colors">
          Hours
        </h3>
        <div class="mt-4 space-y-1 text-gray-600">
          <p>Mon - Fri: <span class="font-medium">9:00 AM - 5:00 PM</span></p>
          <p>Sat: <span class="font-medium">11:00 AM - 4:00 PM</span></p>
          <p class="text-sm text-gray-400 mt-2">Sun: Closed</p>
        </div>
      </div>
    </div>

    <!-- Address Card -->
    <div class="relative flex flex-col justify-between p-6 bg-[#E5F0F7] rounded-xl hover:shadow-lg transition-shadow hover:bg-[#E8F5E9] overflow-hidden min-h-[180px]">
      <!-- Background Icon -->
      <div class="absolute top-1/2 -translate-y-1/2 -right-9 opacity-80 pointer-events-none">
        <Icon 
          name="material-symbols:location-on-outline"
          size="100" 
          class="w-20 h-20 text-scintl-green"
        />
      </div>
      <div class="relative z-10">
        <h3 class="text-[1.5rem] font-semibold text-gray-800 hover:text-scintl-green transition-colors">
          Address
        </h3>
        <div class="mt-4 space-y-2 text-gray-600">
          <p class="flex items-start gap-2">
            <Icon name="heroicons:map-pin-20-solid" class="w-4 h-4 text-scintl-green flex-shrink-0 mt-1" />
            <span>Plot 35 Kenneth Dale Drive,<br />Kamwokya-Kampala, Uganda</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>