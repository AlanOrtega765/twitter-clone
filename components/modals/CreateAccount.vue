<script setup lang="ts">
type Step = 'create-account' | 'recaptcha';

const emits = defineEmits<{
  (e: 'closeModal'): void;
}>();

const { recaptchaSiteKey } = useRuntimeConfig().public;
const { registerSchema } = useJoiSchemas();

const step = ref<Step>('recaptcha');
const recaptchaRef = ref(null);

const recaptchaCallback = () => {
  console.log('Recaptcha cargado!');
};
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
      <FormsCreateAccount
        v-if="step === 'create-account'"
        @change-step="step = 'recaptcha'"
      />
      <div v-if="step === 'recaptcha'"></div>
    </div>
  </div>
</template>
