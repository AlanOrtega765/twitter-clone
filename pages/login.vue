<script setup lang="ts">
definePageMeta({
  layout: 'auth',
});

const user = ref({
  email: '',
  password: '',
});

const submitHandler = () => {};
</script>

<template>
  <UForm :schema="''" :state="user" @submit="submitHandler"></UForm>
</template>
