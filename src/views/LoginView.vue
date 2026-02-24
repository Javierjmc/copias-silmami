<script setup>
import { ref } from 'vue'
import ola from '@/assets/olas/ola-negra.jpg'

const usuario = ref('')
const contrasena = ref('')

function iniciarSesion() {
  // lógica de login
}
</script>

<template>
  <div class="bg-black font-sans relative min-h-screen">
    <img :src="ola" alt="ola" class="w-full" />
    <div class="overflow-hidden absolute top-16 mx-auto left-0 right-0">
      <!-- Onda decorativa superior -->
      <div class="relative h-[520px] flex items-center justify-center">
        <!-- Formulario centrado -->
        <div class="relative z-10 flex flex-col items-center gap-6 mt-12">
          <h1 class="text-5xl font-black text-white drop-shadow-lg">¡Bienvenido!</h1>

          <!-- Campo usuario -->
          <div class="relative w-80">
            <span class="absolute left-4 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
                />
              </svg>
            </span>
            <input
              v-model="usuario"
              type="text"
              placeholder="Usuario"
              class="w-full pl-12 pr-4 py-3 rounded-lg bg-white shadow-md outline-none text-gray-700 focus:ring-2 focus:ring-[#E6007E]"
            />
          </div>

          <!-- Campo contraseña -->
          <div class="relative w-80">
            <span class="absolute left-4 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
                />
              </svg>
            </span>
            <input
              v-model="contrasena"
              type="password"
              placeholder="Contraseña"
              class="w-full pl-12 pr-4 py-3 rounded-lg bg-white shadow-md outline-none text-gray-700 focus:ring-2 focus:ring-[#E6007E]"
            />
          </div>

          <!-- Links -->
          <div class="flex justify-between w-80 text-white text-sm">
            <a href="#" class="hover:underline">Recuperar la contraseña</a>
            <RouterLink to="/registro" class="hover:underline">Crear Cuenta</RouterLink>
          </div>

          <!-- Botón ingresar -->
          <button
            @click="iniciarSesion"
            class="w-80 py-3 bg-[#E6007E] text-white font-bold text-lg rounded-lg shadow-lg hover:bg-pink-700 transition-colors cursor-pointer"
          >
            Ingresar
          </button>

          <!-- Separador -->
          <div class="flex items-center gap-3 w-80">
            <div class="flex-1 h-px bg-white opacity-50"></div>
            <span class="text-white text-sm">o</span>
            <div class="flex-1 h-px bg-white opacity-50"></div>
          </div>

          <!-- Google -->
          <button
            class="w-16 h-16 flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              style="width: 32px; height: 32px"
            >
              <path
                fill="#FFFFFF"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#FFFFFF"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FFFFFF"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#FFFFFF"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
              <path fill="none" d="M0 0h48v48H0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
