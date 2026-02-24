<script setup>
import PieDePagina from '@/components/PieDePagina.vue'
import Titulo from '@/components/Titulo.vue'
import tazas from '../assets/servicios/tazas.png'
import camisas from '../assets/servicios/camisas.png'
import boligrafos from '../assets/servicios/boligrafo.png'
</script>

<template>
  <div class="min-h-screen bg-white font-sans">
    <!-- Sección: Impresiones en Distintos Formatos -->
    <Titulo>Impresiones en Distintos Formatos</Titulo>
    <section class="py-8 px-8">
      <!-- Tarjeta azul con formatos de papel -->
      <div class="bg-[#009FE3] rounded-3xl p-10 max-w-4xl mx-auto">
        <div class="flex items-end justify-center gap-8">
          <!-- Carta -->
          <div class="flex flex-col items-center gap-3">
            <div
              class="bg-white rounded-lg shadow-lg flex items-center justify-center"
              style="width: 110px; height: 140px"
            >
              <span class="text-[#009FE3] font-bold text-xl">Carta</span>
            </div>
          </div>

          <!-- Oficio -->
          <div class="flex flex-col items-center gap-3">
            <div
              class="bg-white rounded-lg shadow-lg flex items-center justify-center"
              style="width: 130px; height: 165px"
            >
              <span class="text-[#009FE3] font-bold text-xl">Oficio</span>
            </div>
          </div>

          <!-- Tabloide -->
          <div class="flex flex-col items-center gap-3">
            <div
              class="bg-white rounded-lg shadow-lg flex items-center justify-center"
              style="width: 155px; height: 195px"
            >
              <span class="text-[#009FE3] font-bold text-xl">Tabloide</span>
            </div>
          </div>

          <!-- A5 (el más grande en el diseño) -->
          <div class="flex flex-col items-center gap-3">
            <div
              class="bg-white rounded-lg shadow-lg flex items-center justify-center"
              style="width: 185px; height: 235px"
            >
              <span class="text-[#009FE3] font-bold text-2xl">A5</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Materiales adicionales -->
      <div class="mt-8 max-w-4xl mx-auto text-center">
        <p class="text-gray-600 text-lg">
          Impresiones en
          <strong>bond, opalina, cartulina majestic, glasse, papel fotográfico, adhesivo</strong> y
          más.
        </p>
      </div>
    </section>
    <Titulo>Sublimación de Alta Calidad</Titulo>

    <!-- Sección: Sublimación de Alta Calidad -->
    <section class="py-16 px-8 text-white">
      <div class="max-w-7xl mx-auto grid grid-cols-3 gap-6 bg-[#E6007E] rounded-3xl p-10">
        <!-- Tazas Sublimadas -->
        <div
          class="bg-[#E6007E] flex flex-col items-center gap-5 hover:scale-105 transition-transform"
        >
          <!-- Ícono taza -->
          <img :src="tazas" alt="Tazas Sublimadas" class="w-40 object-contain" />
          <div class="text-center">
            <h3 class="text-2xl font-black">Tazas</h3>
            <h3 class="text-2xl font-black">Sublimadas</h3>
          </div>
        </div>

        <!-- Camisetas Personalizadas -->
        <div
          class="bg-[#E6007E] flex flex-col items-center gap-5 hover:scale-105 transition-transform"
        >
          <img :src="camisas" alt="Camisetas Personalizadas" class="w-40 object-contain" />
          <div class="text-center">
            <h3 class="text-2xl font-black">Camisetas</h3>
            <h3 class="text-2xl font-black">Personalizadas</h3>
          </div>
        </div>

        <!-- Bolígrafos Sublimados -->
        <div
          class="bg-[#E6007E] flex flex-col items-center gap-5 hover:scale-105 transition-transform"
        >
          <img :src="boligrafos" alt="Bolígrafos Sublimados" class="w-40 object-contain" />
          <div class="text-center">
            <h3 class="text-2xl font-black">Bolígrafos</h3>
            <h3 class="text-2xl font-black">Sublimados</h3>
          </div>
        </div>
      </div>
    </section>

    <PieDePagina bgClass="bg-black" />
  </div>
</template>
