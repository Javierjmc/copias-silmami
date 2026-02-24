<script setup>
import chico from '@/assets/home/chico.png'
import impreUno from '@/assets/home/IMPRE 1.png'
import impreDos from '@/assets/home/IMPRE 2.png'
</script>

<template>
  <section class="w-full overflow-hidden font-sans shadow-lg relative">
    <div class="px-20 bg-[#009EE3]">
      <div class="flex flex-col md:flex-row items-center justify-between p-6 relative w-[1100px]">
        <div class="flex items-center gap-6 text-white mb-6 md:mb-0">
          <div class="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
            <slot name="printer-icon">
              <img :src="impreUno" alt="Impresora" class="w-full h-full object-contain invert" />
            </slot>
          </div>

          <h2 class="text-3xl md:text-4xl font-bold leading-tight">
            Impresiones y <br />
            Copiados
          </h2>
        </div>

        <div class="bg-[#FFED00] p-4 md:p-6 rounded-xl shadow-md max-w-xs transform">
          <p class="text-[#231F20] text-xl md:text-2xl font-extrabold text-center leading-snug">
            ¡En Copias Silmami tenemos lo mejor para ti!
          </p>
        </div>
      </div>
    </div>

    <div
      class="bg-white flex flex-col md:flex-row items-center justify-start p-8 md:py-12 md:px-20 gap-8"
    >
      <div class="w-2/3 flex items-center justify-center">
        <div class="flex-1 text-center md:text-left">
          <h3 class="text-[#E6007E] text-4xl md:text-5xl font-black uppercase tracking-tight">
            Sublimación <br />
            de Alta Calidad
          </h3>
        </div>

        <div class="w-32 h-32 md:w-48 md:h-48 text-[#E6007E]">
          <slot name="sublimation-icon">
            <img
              :src="impreDos"
              alt="Sublimación"
              class="w-full h-full object-contain"
              style="
                filter: invert(18%) sepia(88%) saturate(5412%) hue-rotate(318deg) brightness(96%)
                  contrast(108%);
              "
            />
          </slot>
        </div>
      </div>

      <div class="hidden md:block w-32"></div>
    </div>

    <img
      :src="chico"
      alt="Chico"
      class="w-[250px] h-full object-cover absolute bottom-0 right-20"
    />
  </section>
</template>
