<script setup>
import ceos from '../../assets/home/ceos.png'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="text-white relative">
    <div class="bg-black px-20 h-[500px] flex justify-end items-center">
      <div class="w-1/2 flex flex-col gap-8 items-end">
        <p class="text-3xl font-semibold text-end">
          “En Copias Silmami C.A, nos comprometemos a brindar soluciones integrales de fotocopiado,
          papelería y apoyo en tareas escolares para nuestros clientes” “En Copias Silmami C.A, nos
          comprometemos a brindar soluciones integrales de fotocopiado, papelería y apoyo en tareas
          escolares para nuestros clientes”
        </p>
        <RouterLink
          to="/conocenos"
          class="text-[rgb(230,0,126)] text-xl font-semibold cursor-pointer bg-white border border-[#009FE3] px-16 py-2 rounded-2xl mr-10"
        >
          Conócenos
        </RouterLink>
      </div>
    </div>
    <div class="bg-[rgb(230,0,126)] h-[150px] flex flex-col items-end">
      <p class="bg-[rgb(233,145,3)] text-4xl font-semibold px-20 py-1 z-10">
        ¡Obtén 5% de Descuento con
      </p>
      <p class="text-4xl font-semibold px-20 py-1">tan solo Regístrarte!</p>
    </div>

    <img :src="ceos" alt="foto de CEOS" class="h-[650px] absolute top-0 left-20" />
  </section>
</template>
