<script setup lang="ts">
import Cabecera from '@/components/home/Cabecera.vue'
import Carrousel from '@/components/home/Carrousel.vue'
import LlamadoAccion from '@/components/home/LlamadoAccion.vue'
import Promocion from '@/components/home/Promocion.vue'
import PieDePagina from '@/components/PieDePagina.vue'
import Titulo from '@/components/Titulo.vue'
</script>

<template>
  <Cabecera />
  <LlamadoAccion />
  <Carrousel />
  <Titulo>Servicios de impresión</Titulo>
  <Promocion />
  <!-- <Titulo>Ve nuestros videos</Titulo> -->
  <PieDePagina />
</template>
