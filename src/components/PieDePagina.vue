<template>
  <div class="w-full font-sans overflow-hidden">
    <div
      :class="[bgClass ? bgClass : 'bg-[#009EE3]']"
      class="flex flex-col md:flex-row items-center justify-around px-20 py-4 text-white relative transition-colors duration-300"
    >
      <div class="flex flex-col items-center gap-4 mb-8 md:mb-0">
        <h3 class="text-2xl font-bold tracking-wide">Síguenos</h3>
        <div class="flex gap-4">
          <a href="">
            <img :src="face" alt="Facebook" class="h-8 w-8 invert" />
          </a>
          <a href="">
            <img :src="tiktok" alt="TikTok" class="h-8 w-8 invert" />
          </a>
          <a href="https://www.instagram.com/copiasilmami/" target="_blank" rel="noopener">
            <img :src="ig" alt="Instagram" class="h-8 w-8 invert" />
          </a>
        </div>
      </div>

      <div class="flex items-center gap-4 max-w-sm mb-8 md:mb-0">
        <div class="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-14 w-14"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            />
          </svg>
        </div>
        <div>
          <h3 class="text-2xl font-bold">Ubícanos</h3>
          <p class="text-sm md:text-base leading-tight opacity-90">
            En la Av. Principal de Curagua, frente a los departamentos
          </p>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <div class="flex-shrink-0">
          <img :src="ws" alt="WhatsApp" class="h-14 w-14 invert" />
        </div>
        <div>
          <h3 class="text-2xl font-bold">Contacto</h3>
          <p class="text-xl font-medium">0426-2803487</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import ws from '../assets/iconoWhatsapp.png'
import face from '../assets/face.png'
import tiktok from '../assets/tiktok.png'
import ig from '../assets/ig.png'

const props = defineProps({
  // Permite pasar clases de Tailwind como 'bg-black' o 'bg-blue-500'
  bgClass: {
    type: String,
    default: 'bg-[#009EE3]',
  },
})
</script>

<style scoped>
/* Transición suave para cuando cambies el color de la prop */
.transition-colors {
  transition: background-color 0.3s ease;
}
</style>
