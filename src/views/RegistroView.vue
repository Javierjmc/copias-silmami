<script setup>
import { ref } from 'vue'
import chica from '@/assets/registro/chica.png'
import ola from '@/assets/olas/ola-negra-registro.jpg'

const nombre = ref('')
const apellido = ref('')
const edad = ref('')
const correo = ref('')
const contrasena = ref('')
const repetirContrasena = ref('')

function registrar() {
  // lógica de registro
}
</script>

<template>
  <div class="min-h-screen bg-black font-sans overflow-hidden">
    <img :src="ola" alt="ola" class="w-full" />

    <div class="absolute top-[150px] mx-auto left-0 right-0">
      <div class="relative z-10 flex min-h-[700px] items-end">
        <!-- Lado izquierdo: texto + imagen chica -->
        <div class="w-1/2 flex items-end pl-20">
          <p class="text-white text-3xl font-black leading-snug">
            ¡Crea una cuenta con<br />
            nosotros y gana un
            <span class="text-[#FFED00]">5% de descuento</span>
            en productos de la tienda!
          </p>
          <img
            :src="chica"
            alt="Chica Silmami"
            class="w-56 mt-4"
            onerror="this.style.display = 'none'"
          />
        </div>

        <!-- Lado derecho: formulario -->
        <div class="w-1/2 flex flex-col items-center justify-center py-16 px-12 gap-5">
          <h1 class="text-5xl font-black text-white drop-shadow-lg mb-2">¡Regístrate!</h1>

          <!-- Fila: nombre, apellido, edad -->
          <div class="flex gap-3 w-full max-w-lg">
            <div class="flex-1 flex flex-col gap-1">
              <label class="text-white text-sm font-semibold">Nombre</label>
              <input
                v-model="nombre"
                type="text"
                class="w-full px-4 py-2.5 rounded-lg bg-white shadow outline-none text-gray-700 focus:ring-2 focus:ring-[#E6007E]"
              />
            </div>
            <div class="flex-1 flex flex-col gap-1">
              <label class="text-white text-sm font-semibold">Apellido</label>
              <input
                v-model="apellido"
                type="text"
                class="w-full px-4 py-2.5 rounded-lg bg-white shadow outline-none text-gray-700 focus:ring-2 focus:ring-[#E6007E]"
              />
            </div>
            <div class="w-24 flex flex-col gap-1">
              <label class="text-white text-sm font-semibold">Edad</label>
              <input
                v-model="edad"
                type="number"
                class="w-full px-4 py-2.5 rounded-lg bg-white shadow outline-none text-gray-700 focus:ring-2 focus:ring-[#E6007E]"
              />
            </div>
          </div>

          <!-- Correo -->
          <div class="grid grid-cols-3 gap-1 w-full max-w-lg">
            <label class="text-white text-sm font-semibold flex justify-center items-center"
              >Correo</label
            >
            <input
              v-model="correo"
              type="email"
              class="col-span-2 px-4 py-2.5 rounded-lg bg-white shadow outline-none text-gray-700 focus:ring-2 focus:ring-[#E6007E]"
            />
          </div>

          <!-- Contraseña -->
          <div class="grid grid-cols-3 gap-1 w-full max-w-lg">
            <label class="text-white text-sm font-semibold flex justify-center items-center"
              >Contraseña</label
            >
            <input
              v-model="contrasena"
              type="password"
              class="col-span-2 px-4 py-2.5 rounded-lg bg-white shadow outline-none text-gray-700 focus:ring-2 focus:ring-[#E6007E]"
            />
          </div>

          <!-- Repetir contraseña -->
          <div class="w-full max-w-lg grid grid-cols-3 gap-1">
            <label
              class="text-white text-sm font-semibold flex flex-wrap justify-center items-center"
              ><span>Vuelva a repetir</span> <span>Contraseña</span></label
            >
            <input
              v-model="repetirContrasena"
              type="password"
              class="col-span-2 px-4 py-2.5 rounded-lg bg-white shadow outline-none text-gray-700 focus:ring-2 focus:ring-[#E6007E]"
            />
          </div>

          <!-- Botón Google -->
          <button
            class="w-full max-w-lg py-3 bg-[#E6007E] text-white font-bold text-lg rounded-lg shadow-lg hover:bg-pink-700 transition-colors flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-6 h-6">
              <path
                fill="#fff"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#fff"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#fff"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#fff"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>
            Regístrate con tu cuenta de Google
          </button>

          <!-- Link login -->
          <p class="text-white text-sm">
            ¿Ya tienes cuenta?
            <RouterLink to="/login" class="font-bold underline hover:text-yellow-300"
              >Inicia Sesión</RouterLink
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
