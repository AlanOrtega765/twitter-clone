<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://www.google.com/recaptcha/api.js',
      async: 'true',
      defer: 'true',
    },
  ],
});

const emits = defineEmits<{
  (e: 'closeModal'): void;
}>();

const { recaptchaSiteKey } = useRuntimeConfig().public;
const { registerSchema } = useJoiSchemas();

const user = ref({
  name: '',
  email: '',
  password: '',
});

const submitHandler = () => {};
</script>

<template>
  <div
    class="fixed top-0 left-0 bg-white/20 backdrop-blur-[2px] flex justify-center items-center h-full w-full animate-fade animate-duration-300"
  >
    <div class="relative h-[90%] bg-black rounded-2xl p-4 w-[600px]">
      <div class="flex items-center">
        <IconsTwitter
          class="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10"
        />
        <button
          class="ml-auto flex items-center justify-center rounded-md p-1 hover:bg-white/10"
          @click="emits('closeModal')"
        >
          <Icon name="charm:cross" size="32" />
        </button>
      </div>
      <UForm :schema="registerSchema" :state="user" @submit="submitHandler">
        <UFormGroup label="Nombre">
          <UInput v-model="user.name" size="xl" />
        </UFormGroup>
        <UFormGroup label="Correo Electrónico">
          <UInput v-model="user.email" size="xl" />
        </UFormGroup>
      </UForm>
    </div>
  </div>
</template>
