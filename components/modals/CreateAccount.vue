<script setup lang="ts">
type Step = 'create-account' | 'recaptcha';

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

const step = ref<Step>('create-account');
</script>

<template>
  <div
    class="fixed top-0 left-0 bg-white/20 backdrop-blur-[2px] flex justify-center items-center h-full w-full animate-fade animate-duration-300"
  >
    <div
      class="flex flex-col relative h-[90%] bg-black rounded-2xl p-4 w-[600px]"
    >
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
      <FormsCreateAccount
        v-if="step === 'create-account'"
        @change-step="step = 'recaptcha'"
      />
      <div v-if="step === 'recaptcha'">
        <div class="g-recaptcha" :data-sitekey="recaptchaSiteKey"></div>
      </div>
    </div>
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgb(209, 213, 219);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(209, 213, 219, 0.8);
}
</style>
