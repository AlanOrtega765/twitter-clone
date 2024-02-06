<script setup lang="ts">
definePageMeta({
  layout: 'auth',
});

const supabase = useSupabaseClient();

const isOpenSignUpModal = ref(false);
const isOpenSignInModal = ref(false);

const signInOAuth = async (provider: any) => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: 'http://localhost:3000/redirect',
    }
  });

  if (error) return console.log(error);
};
</script>

<template>
  <div class="mt-16">
    <h1 class="text-white text-4xl font-bold">Únete Hoy</h1>
    <div class="flex flex-col gap-y-4 mt-8">
      <div class="flex gap-x-4">
        <button
          class="flex items-center justify-center gap-x-4 w-[300px] py-3 rounded-full bg-white hover:bg-gray-200 transition-colors text-black"
          @click="signInOAuth('google')"
        >
          <Icon name="logos:google-icon" size="24" />
          <span>Iniciar Sesión con Google</span>
        </button>
        <button
          class="flex items-center justify-center gap-x-4 w-1/2 py-3 rounded-full bg-white hover:bg-gray-200 transition-colors text-black"
          @click="signInOAuth('github')"
        >
          <Icon name="logos:github-icon" size="24" />
          <span>Iniciar Sesión con Github</span>
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
          @click="isOpenSignUpModal = true"
        >
          Crear Cuenta
        </button>
        <button
          class="text-center w-1/2 py-3 rounded-full text-white ring-1 ring-white border-white hover:bg-white/5 transition-colors"
          @click="isOpenSignInModal = true"
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  </div>
  <ModalsSignUp
    v-if="isOpenSignUpModal"
    @close-modal="isOpenSignUpModal = false"
  />

  <ModalsSignIn
    v-if="isOpenSignInModal"
    @close-modal="isOpenSignInModal = false"
  />
</template>
