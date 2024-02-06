<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: 'verify-email',
});

const redirect = () => {
  setTimeout(() => {
    navigateTo('/');
  }, 2000);
};

redirect();
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-x-4 h-dvh">
    <IconsTwitter class="w-[200px] h-[200px]" />
    <Icon class="animate-spin mt-10" name="mingcute:loading-fill" size="50" />
  </div>
</template>
