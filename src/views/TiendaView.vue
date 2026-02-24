<script setup>
import { ref, computed } from 'vue'
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

const busqueda = ref('')
const paginaActual = ref(1)
const productosPorPagina = 9

// Productos de ejemplo (en producción vendrían de una API)
const productos = ref([
  { id: 1, nombre: 'Crayones Jumbo', precio: '1$', imagen: uno },
  { id: 2, nombre: 'Palitos de Madera', precio: '2.50$', imagen: dos },
  { id: 3, nombre: 'Notas Adhesivas Ofimak', precio: '3$', imagen: tres },
  { id: 4, nombre: 'Goma Blanca Pointer', precio: '1$', imagen: cuatro },
  { id: 5, nombre: 'Portaminas Ejecutivo', precio: '0.50$', imagen: cinco },
  { id: 6, nombre: 'Marcadores Permanentes', precio: '1.90$', imagen: seis },
  { id: 7, nombre: 'Block de Papel Lustrillo', precio: '1$', imagen: siete },
  { id: 8, nombre: 'Pinceles de Madera', precio: '2$', imagen: ocho },
  { id: 9, nombre: 'Cinta de Embalaje', precio: '2.03$', imagen: nueve },
  { id: 10, nombre: 'Bolígrafos Kores', precio: '1.50$', imagen: diez },
])

const productosFiltrados = computed(() =>
  productos.value.filter((p) => p.nombre.toLowerCase().includes(busqueda.value.toLowerCase())),
)

const totalPaginas = computed(() => Math.ceil(productosFiltrados.value.length / productosPorPagina))

const productosPagina = computed(() => {
  const inicio = (paginaActual.value - 1) * productosPorPagina
  return productosFiltrados.value.slice(inicio, inicio + productosPorPagina)
})

function irAPagina(n) {
  paginaActual.value = n
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Colores de íconos de categorías para productos sin imagen
const coloresIcono = ['#E6007E', '#009FE3', '#FFED00', '#E6007E', '#009FE3']
</script>

<template>
  <div class="min-h-screen bg-white font-sans">
    <!-- Barra de búsqueda / cabecera tienda -->
    <header class="bg-white border-b-2 border-gray-100 px-8 py-4">
      <div class="flex items-center justify-between max-w-6xl mx-auto">
        <!-- Logo ya está en App.vue pero mostramos la barra de búsqueda -->
        <div class="flex-1 max-w-lg mx-8">
          <div class="flex items-center bg-[#E6007E] rounded-full px-4 py-2 gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-white flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              v-model="busqueda"
              type="text"
              placeholder="Buscar productos..."
              class="flex-1 bg-transparent text-white placeholder-pink-200 outline-none text-lg"
            />
          </div>
        </div>

        <!-- Íconos navegación tienda -->
        <div class="flex items-center gap-4">
          <RouterLink to="/" class="p-2 hover:text-[#E6007E] transition-colors text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </RouterLink>
          <button class="p-2 hover:text-[#E6007E] transition-colors text-gray-700 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7 17h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0023.46 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
          </button>
          <button class="p-2 hover:text-[#E6007E] transition-colors text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
              />
            </svg>
          </button>
          <RouterLink to="/perfil" class="p-2 hover:text-[#E6007E] transition-colors text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
              />
            </svg>
          </RouterLink>
        </div>
      </div>
    </header>

    <!-- Tasa BCV -->
    <div class="bg-black text-white text-center py-2 px-20 ml-auto font-bold text-lg w-fit">
      Tasa BCV del día: 370,25 Bs.
    </div>

    <!-- Grid de productos -->
    <main class="max-w-6xl mx-auto px-8 py-10">
      <div class="grid grid-cols-3 gap-6">
        <div
          v-for="(producto, index) in productosPagina"
          :key="producto.id"
          class="border-2 border-[#E6007E] rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 shadow-md"
        >
          <!-- Imagen del producto -->
          <div class="h-44 flex items-center justify-center p-4">
            <img
              v-if="producto.imagen"
              :src="producto.imagen"
              :alt="producto.nombre"
              class="h-full w-full object-contain"
            />
            <!-- Placeholder si no hay imagen -->
            <div
              v-else
              class="w-24 h-24 bg-pink-400 rounded-xl flex items-center justify-center opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                />
              </svg>
            </div>
          </div>

          <!-- Info del producto -->
          <div class="bg-white px-4 py-3 text-center">
            <p class="font-black text-xl text-gray-800">{{ producto.precio }}</p>
            <p class="text-gray-600 text-sm leading-tight">{{ producto.nombre }}</p>
          </div>
        </div>
      </div>

      <!-- Sin resultados -->
      <div v-if="productosPagina.length === 0" class="text-center py-20 text-gray-500 text-xl">
        No se encontraron productos con "{{ busqueda }}"
      </div>
    </main>

    <!-- Paginación -->
    <div class="bg-black py-4">
      <div class="flex justify-center gap-2">
        <button
          v-for="n in totalPaginas"
          :key="n"
          @click="irAPagina(n)"
          class="w-10 h-10 rounded-md font-bold text-lg transition-all"
          :class="
            paginaActual === n
              ? 'bg-[#E6007E] text-white scale-110 shadow-lg'
              : 'bg-white text-[#E6007E] hover:bg-pink-100'
          "
        >
          {{ n }}
        </button>
      </div>
    </div>
  </div>
</template>
