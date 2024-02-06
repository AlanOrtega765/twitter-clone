<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: 'verify-email',
});

const count = ref(5);

const countdown = () => {
  setInterval(() => {
    if (count.value === 0) return navigateTo('/login');
    count.value--;
  }, 1000);
};

countdown();
</script>

<template>
  <div class="flex justify-center items-center gap-x-4 h-dvh">
    <IconsTwitter class="w-[200px] h-[200px]" />
    <div class="flex flex-col items-center gap-y-4">
      <h1 class="text-5xl font-medium">¡Tu cuenta ha sido verificada!</h1>
      <div class="flex flex-col items-center text-4xl font-light mt-2">
        <h2 class="text-2xl font-medium">Redirigiendote...</h2>
        <span class="font-light mt-4">{{ count }}</span>
      </div>
    </div>
  </div>
</template>
