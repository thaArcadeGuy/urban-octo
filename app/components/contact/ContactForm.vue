<script setup lang="ts">
import { ref, reactive, computed } from "vue";

interface ContactResponse {
  success: boolean;
  message?: string;
}

const form = reactive({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);
const errorMessage = ref("");
const successMessage = ref("");

const errors = reactive({
  name: "",
  email: "",
  message: "",
});

const subjectOptions = [
  { value: "", label: "Subject" },
  { value: "general", label: "General Inquiry" },
  { value: "cloud", label: "Cloud Solutions" },
  { value: "security", label: "Cybersecurity" },
  { value: "technology", label: "Technology Implementation" },
  { value: "enterprise", label: "Enterprise Solutions" },
  { value: "partnership", label: "Partnership" },
  { value: "support", label: "Technical Support" },
  { value: "other", label: "Other" },
];

const validateName = (name: string): boolean => {
  if (!name || name.trim().length < 2) {
    errors.name = "Please enter your full name (minimum 2 characters)";
    return false;
  }
  errors.name = "";
  return true;
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "Please enter a valid email address";
    return false;
  }
  errors.email = "";
  return true;
};

const validateMessage = (message: string): boolean => {
  if (!message || message.trim().length < 10) {
    errors.message = "Please enter a message (minimum 10 characters)";
    return false;
  }
  errors.message = "";
  return true;
};

const isFormValid = computed(() => {
  return (
    form.name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.message.trim().length >= 10
  );
});

const handleSubmit = async () => {
  const isNameValid = validateName(form.name);
  const isEmailValid = validateEmail(form.email);
  const isMessageValid = validateMessage(form.message);

  if (!isNameValid || !isEmailValid || !isMessageValid) {
    const firstError = document.querySelector(".text-red-500");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }

  isSubmitting.value = true;
  errorMessage.value = "";
  successMessage.value = "";

  try {
    const response = await $fetch<ContactResponse>("/api/contact", {
      method: "POST",
      body: form,
    });

    if (response.success) {
      isSubmitted.value = true;
      successMessage.value =
        "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.";

      form.name = "";
      form.email = "";
      form.phone = "";
      form.subject = "";
      form.message = "";

      setTimeout(() => {
        successMessage.value = "";
        isSubmitted.value = false;
      }, 5000);
    } else {
      errorMessage.value =
        response.message || "Something went wrong. Please try again.";
    }
  } catch (error) {
    console.error("Form submission error:", error);
    errorMessage.value =
      "Unable to send your message. Please try again later or contact us directly at info@scintl.co.ug";
  } finally {
    isSubmitting.value = false;
  }
};

const clearError = (field: keyof typeof errors) => {
  errors[field] = "";
};
</script>

<template>
  <div class="container mx-auto px-4 max-w-[50rem]">
    <div class="my-10">
      <SharedSectionHeader
        heading="Leave Us a Message"
        alignment="center"
        heading-max-width="700px"
      >
        <template #after-heading>
          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
            Fill all information details to consult with us to get services from
            us.
          </p>
        </template>
      </SharedSectionHeader>
    </div>
    <!-- Success Message -->
    <div
      v-if="successMessage"
      class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-start gap-3"
    >
      <Icon
        name="heroicons:check-circle-20-solid"
        class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
      />
      <div>
        <p class="font-medium">Message Sent!</p>
        <p class="text-sm">{{ successMessage }}</p>
      </div>
    </div>

    <!-- Error Message -->
    <div
      v-if="errorMessage"
      class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 flex items-start gap-3"
    >
      <Icon
        name="heroicons:x-circle-20-solid"
        class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
      />
      <div>
        <p class="font-medium">Something went wrong</p>
        <p class="text-sm">{{ errorMessage }}</p>
      </div>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-5" novalidate>
      <div class="flex flex-col gap-4 justify-between items-start md:flex-row">
        <!-- Name -->
        <div class="w-full">
          <input
            id="name"
            v-model="form.name"
            type="text"
            :class="[
              'w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-scintl-green/50',
              errors.name
                ? 'border-red-500 bg-red-50'
                : 'border-gray-300 focus:border-scintl-green',
            ]"
            placeholder="Full Name *"
            @input="
              () => {
                clearError('name');
                validateName(form.name);
              }
            "
            @blur="validateName(form.name)"
            :disabled="isSubmitting"
          />
          <!-- Fixed height error container -->
          <div class="h-2 mt-1">
            <p v-if="errors.name" class="text-sm text-red-500">
              {{ errors.name }}
            </p>
          </div>
        </div>

        <!-- Email -->
        <div class="w-full">
          <input
            id="email"
            v-model="form.email"
            type="email"
            :class="[
              'w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-scintl-green/50',
              errors.email
                ? 'border-red-500 bg-red-50'
                : 'border-gray-300 focus:border-scintl-green',
            ]"
            placeholder="Email Address *"
            @input="
              () => {
                clearError('email');
                validateEmail(form.email);
              }
            "
            @blur="validateEmail(form.email)"
            :disabled="isSubmitting"
          />
          <div class="h-2 mt-1">
            <p v-if="errors.email" class="text-sm text-red-500">
              {{ errors.email }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 justify-between items-start md:flex-row">
        <!-- Phone -->
        <div class="w-full">
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-scintl-green focus:outline-none focus:ring-2 focus:ring-scintl-green/50 transition-colors duration-200"
            placeholder="Phone"
            :disabled="isSubmitting"
          />
        </div>

        <!-- Subject -->
        <div class="w-full">
          <select
            id="subject"
            v-model="form.subject"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-scintl-green focus:outline-none focus:ring-2 focus:ring-scintl-green/50 transition-colors duration-200 appearance-none bg-white"
            :disabled="isSubmitting"
          >
            <option
              v-for="option in subjectOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>

      <!-- Message -->
      <div>
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          :class="[
            'w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-scintl-green/50 resize-y',
            errors.message
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300 focus:border-scintl-green',
          ]"
          placeholder="Message *"
          @input="
            () => {
              clearError('message');
              validateMessage(form.message);
            }
          "
          @blur="validateMessage(form.message)"
          :disabled="isSubmitting"
        />
        <div class="h-2 mt-1 flex justify-between">
          <p v-if="errors.message" class="text-sm text-red-500">
            {{ errors.message }}
          </p>
          <p v-else class="text-xs text-gray-400">
            {{ form.message.length }}/10 characters minimum
          </p>
        </div>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="!isFormValid || isSubmitting"
        class="group relative w-full overflow-hidden bg-scintl-blue text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
        :class="[
          !isFormValid || isSubmitting
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-opacity-90 hover:shadow-lg active:scale-[0.98] cursor-pointer',
        ]"
      >
        <!-- Sliding Background -->
        <span
          v-if="isFormValid && !isSubmitting"
          class="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 ease-in-out group-hover:translate-x-0"
        ></span>

        <span class="relative z-10 flex items-center justify-center gap-2">
          <Icon
            v-if="isSubmitting"
            name="heroicons:arrow-path-20-solid"
            class="w-5 h-5 animate-spin"
          />
          <Icon
            v-else
            name="heroicons:paper-airplane-20-solid"
            class="w-5 h-5"
          />
          {{ isSubmitting ? "Sending..." : "Send Message" }}
        </span>
      </button>

      <!-- Trust Signal -->
      <p
        class="text-center text-xs text-gray-400 flex items-center justify-center gap-1 mt-2"
      >
        <Icon name="heroicons:lock-closed-20-solid" class="w-3 h-3" />
        Your information is secure and will not be shared
      </p>
    </form>
  </div>
</template>
