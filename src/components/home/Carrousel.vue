<script setup>
import { ref } from 'vue'
import uno from '@/assets/productos/1.png'
import dos from '@/assets/productos/2.png'
import tres from '@/assets/productos/3.png'
import cuatro from '@/assets/productos/4.png'
import cinco from '@/assets/productos/5.png'
import seis from '@/assets/productos/6.png'
import siete from '@/assets/productos/7.png'
import ocho from '@/assets/productos/8.png'
import nueve from '@/assets/productos/9.png'
import diez from '@/assets/productos/10.png'

const products = ref([
  {
    id: 1,
    name: 'Crayones Jumbo',
    description: 'Pack de 12 unidades Marca Pointer',
    image: uno,
  },
  {
    id: 2,
    name: 'Palitos de Madera',
    description: 'Naturales para manualidades y proyectos',
    image: dos,
  },
  {
    id: 3,
    name: 'Notas Adhesivas Ofimak',
    description: '100 hojas amarillas de alta calidad',
    image: tres,
  },
  {
    id: 4,
    name: 'Goma Blanca Pointer',
    description: 'Pega escolar líquida de 250g',
    image: cuatro,
  },
  {
    id: 5,
    name: 'Portaminas Ejecutivo',
    description: 'Diseño elegante con clip metálico',
    image: cinco,
  },
  {
    id: 6,
    name: 'Marcadores Permanentes',
    description: 'Caja de 12 unidades Marca Ofimak (Verde)',
    image: seis,
  },
  {
    id: 7,
    name: 'Block de Papel Lustrillo',
    description: 'Marca Solita, 10 hojas de colores',
    image: siete,
  },
  {
    id: 8,
    name: 'Pinceles de Madera',
    description: 'Set de pinceles planos Marca Solita',
    image: ocho,
  },
  {
    id: 9,
    name: 'Cinta de Embalaje',
    description: 'Transparente marca Ofimak pack doble',
    image: nueve,
  },
  {
    id: 10,
    name: 'Bolígrafos Kores',
    description: 'K-Pen variados (Negro, Azul y Rojo)',
    image: diez,
  },
])

const slider = ref(null)

const scroll = (direction) => {
  const distance = 300
  if (direction === 'left') {
    slider.value.scrollBy({ left: -distance, behavior: 'smooth' })
  } else {
    slider.value.scrollBy({ left: distance, behavior: 'smooth' })
  }
}
</script>

<template>
  <section class="bg-[#FFED00] py-12 px-4 md:px-10 overflow-hidden">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
      ¡Tenemos nuevos productos!
    </h2>

    <div class="relative max-w-7xl mx-auto flex items-center">
      <button
        @click="scroll('left')"
        aria-label="Anterior"
        class="absolute left-0 z-20 p-2 text-[#3D3601] hover:scale-110 transition-transform bg-yellow-400/20 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 md:h-20 md:w-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div
        ref="slider"
        class="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-20 w-full"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="flex-none w-72 snap-center flex flex-col items-center text-center group"
        >
          <div class="h-64 w-full flex items-center justify-center mb-6 px-4">
            <img
              :src="product.image"
              :alt="product.name"
              class="max-h-full max-w-full object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div class="px-2">
            <h3 class="font-bold text-xl text-black leading-tight">
              {{ product.name }}
            </h3>
            <p class="text-lg text-black mt-2 font-medium">
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>

      <button
        @click="scroll('right')"
        aria-label="Siguiente"
        class="absolute right-0 z-20 p-2 text-[#3D3601] hover:scale-110 transition-transform bg-yellow-400/20 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 md:h-20 md:w-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  </section>
</template>

<style scoped>
/* Esto asegura que las flechas no se muevan con el scroll y el contenido se deslice debajo */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
