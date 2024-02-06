<script setup lang="ts">
import type { Step } from '~/types';

const emits = defineEmits<{
  (e: 'closeModal'): void;
}>();

const step = ref<Step>('create-account');
</script>

<template>
  <div
    class="fixed top-0 left-0 bg-white/20 backdrop-blur-[2px] flex justify-center items-center h-full w-full animate-fade animate-duration-300 px-4"
  >
    <div
      class="flex flex-col flex-grow relative h-[700px] bg-black rounded-2xl p-4 max-w-[600px] overflow-auto"
    >
      <div class="flex items-center">
        <IconsTwitter
          class="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10"
        />
        <button
        v-if="step === 'create-account'"
          class="ml-auto flex items-center justify-center rounded-md p-1 hover:bg-white/10"
          @click="emits('closeModal')"
        >
          <Icon name="charm:cross" size="32" />
        </button>
      </div>
      <FormsSignUp
        v-if="step === 'create-account'"
        @change-step="step = 'verification-account'"
      />
      <div class="flex flex-grow justify-center items-center" v-if="step === 'verification-account'">
        <h1 class="text-2xl text-center">Por favor, ingresa a tu correo electrónico para verificar tu cuenta.</h1>
      </div>
    </div>
  </div>
</template>
