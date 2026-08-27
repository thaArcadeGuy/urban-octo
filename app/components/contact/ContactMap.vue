<template>
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto mt-10">
        <div class="relative rounded-xl overflow-hidden">
          <!-- Google Maps Iframe -->
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5106.667735484652!2d32.593384!3d0.3437562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbcf956d383d%3A0x83df0fc7dc6e562b!2sScintl%20ltd!5e1!3m2!1sen!2sug!4v1787869823944!5m2!1sen!2sug" 
            width="100%" 
            height="450" 
            style="border:0;"
            loading="lazy" 
            referrerpolicy="strict-origin-when-cross-origin"
            title="SCINTL Office Location - Plot 35 Kenneth Dale Drive, Kamwokya-Kampala, Uganda"
            class="w-full"
            ></iframe>
          
          <!-- Pin overlay -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div class="w-12 h-12 bg-scintl-green rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Icon name="heroicons:map-pin-20-solid" class="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>