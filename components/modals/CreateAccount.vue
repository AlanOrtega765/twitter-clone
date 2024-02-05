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
    <div class="relative h-[70%] bg-black rounded-2xl p-4 w-[600px]">
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
      <UForm
        class="px-14 py-10"
        :schema="registerSchema"
        :state="user"
        @submit="submitHandler"
      >
        <h1 class="text-2xl font-bold">Crea tu cuenta</h1>
        <div class="grid gap-y-6 mt-4">
          <UFormGroup label="Nombre">
            <UInput v-model="user.name" size="xl" color="gray" />
          </UFormGroup>
          <UFormGroup label="Correo Electrónico">
            <UInput v-model="user.email" size="xl" color="gray" />
          </UFormGroup>
          <div>
            <h2 class="text-lg font-medium">Fecha de nacimiento</h2>
            <span class="block text-sm text-zinc-400 leading-[16px]"
              >Esta información no será pública. Confirma tu propia edad,
              incluso si esta cuenta es para una empresa, una mascota u otra
              cosa.</span
            >
            <div class="grid grid-cols-3">
              <UFormGroup label="Mes">
                <UInput
                  v-model="user.email"
                  size="xl"
                  color="gray"
                />
              </UFormGroup>
            </div>
          </div>
        </div>
      </UForm>
    </div>
  </div>
</template>
