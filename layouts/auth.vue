<script setup lang="ts">
const links = ref([
  'Información',
  'Descarga la app X',
  'Centro de ayuda',
  'Condiciones de servicio',
  'Política de privacidad',
  'Política de cookies',
  'Accesibilidad',
  'Información de anuncios',
  'Blog',
  'Estado',
  'Empleos',
  'Recursos para marcas',
  'Publicidad',
  'Marketing',
  'X para empresas',
  'Desarrolladores',
  'Guía',
  'Configuración',
]);
</script>

<template>
  <main class="grid grid-cols-2 place-items-center h-dvh">
    <IconsTwitter class="relative h-3/5" />
    <div class="place-self-start self-center">
      <h1 class="text-7xl font-bold max-w-[600px] text-white">
        Lo que está pasando ahora
      </h1>
      <slot />
    </div>
    <footer
      class="flex flex-wrap justify-center col-span-2 px-14 gap-x-4 gap-y-2 pb-4"
    >
      <NuxtLink class="text-gray-500 hover:text-gray-300 text-[13px]" to="#" v-for="link in links" :key="link">{{ link }}</NuxtLink>
    </footer>
  </main>
</template>
