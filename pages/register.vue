<script setup lang="ts">
definePageMeta({
  layout: 'auth',
});

const user = ref({
  email: '',
  password: '',
});
const isOpenModal = ref(false);
</script>

<template>
  <div class="mt-16">
    <h1 class="text-white text-4xl font-bold">Únete Hoy</h1>
    <div class="flex flex-col gap-y-4 mt-8">
      <div class="flex gap-x-4">
        <button
          class="flex items-center justify-center gap-x-4 w-[300px] py-3 rounded-full bg-white hover:bg-gray-200 transition-colors text-black"
        >
          <Icon name="logos:google-icon" size="24" />
          <span>Registrarse con Google</span>
        </button>
        <button
          class="flex items-center justify-center gap-x-4 w-1/2 py-3 rounded-full bg-white hover:bg-gray-200 transition-colors text-black"
        >
          <Icon name="logos:apple" size="24" />
          <span>Registrarse con Apple</span>
        </button>
      </div>
      <div class="flex items-center gap-x-4">
        <div class="h-[0.5px] w-full bg-white/40"></div>
        <span class="text-center text-white/40 text-sm">o</span>
        <div class="h-[0.5px] w-full bg-white/40"></div>
      </div>
      <div class="flex items-center gap-x-4">
        <button
          class="w-1/2 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          @click="isOpenModal = true"
        >
          Crear Cuenta
        </button>
        <NuxtLink
          to="/login"
          class="text-center w-1/2 py-3 rounded-full text-white ring-1 ring-white border-white hover:bg-white/5 transition-colors"
        >
          Iniciar Sesión
        </NuxtLink>
      </div>
    </div>
  </div>
  <ModalsCreateAccount v-if="isOpenModal" @close-modal="isOpenModal = false" />
</template>
