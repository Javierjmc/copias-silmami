<script setup>
import { RouterLink, RouterView } from 'vue-router'
import logo from './assets/branding/logo.png'
</script>

<template>
  <nav class="flex justify-between items-center px-20 py-6">
    <RouterLink to="/"><img :src="logo" alt="logo" class="w-[50px]" /></RouterLink>
    <div class="flex gap-2">
      <RouterLink
        to="/login"
        class="bg-[#E6007E] text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors duration-300"
        >Iniciar Sesión</RouterLink
      >
      <RouterLink
        to="/registro"
        class="bg-[#E6007E] text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors duration-300"
        >Crear Cuenta</RouterLink
      >
      <RouterLink
        to="/tienda"
        class="bg-[#E6007E] text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors duration-300"
        >Tienda</RouterLink
      >
      <RouterLink
        to="/servicios"
        class="bg-[#E6007E] text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors duration-300"
        >Servicios</RouterLink
      >
      <RouterLink
        to="/conocenos"
        class="bg-[#E6007E] text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors duration-300"
        >Conócenos</RouterLink
      >
    </div>
  </nav>
  <RouterView />
</template>
