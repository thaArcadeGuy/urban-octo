<template>
  <SharedPageHero
    background-image="/img/contact/contact-us.jpg"
    tagline="Contact Us"
    headline="Let's Start a<br />"
    headline-highlight="Conversation."
    paragraph="Have a project in mind? Looking for technology solutions that deliver results? Reach out to us and let's discuss how SCINTL can help you achieve your goals."
    :overlay-opacity="60"
  />
  <section class="py-16 bg-white">
    <ContactInfo />
    <ContactMap />
  </section>
</template>