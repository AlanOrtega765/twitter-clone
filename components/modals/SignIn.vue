<script setup lang="ts">
const emits = defineEmits<{
  (e: 'closeModal'): void;
}>();
</script>

<template>
  <div
    class="fixed top-0 left-0 bg-white/20 backdrop-blur-[2px] flex justify-center items-center h-full w-full animate-fade animate-duration-300 px-4"
  >
    <div
      class="flex flex-col flex-grow relative h-[90%] bg-black rounded-2xl p-4 max-w-[600px] overflow-auto"
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
      <FormsSignIn />
    </div>
  </div>
</template>
