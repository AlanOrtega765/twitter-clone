<script setup lang="ts">
const supabase = useSupabaseClient();

const logOut = async () => {
  await supabase.auth.signOut();
  navigateTo('/auth');
};
</script>

<template>
  <div>
    <h1>Home</h1>
    <button @click="logOut">Cerrar Sesión</button>
  </div>
</template>
