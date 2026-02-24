<script setup>
import PieDePagina from '@/components/PieDePagina.vue'
import ceos from '@/assets/home/ceos.png'
import chico from '@/assets/home/chico.png'
import chica from '@/assets/chica.png'
import iconUno from '@/assets/icons/icons-1.png'
import iconDos from '@/assets/icons/icons-2.png'
import iconTres from '@/assets/icons/icons-3.png'
</script>

<template>
  <div class="font-sans bg-white overflow-hidden">
    <!-- Sección intro -->
    <section class="relative h-[350px] overflow-hidden">
      <div class="relative flex items-center justify-between px-20 bg-white overflow-hidden">
        <div class="max-w-3xl z-10">
          <p class="text-gray-800 text-xl leading-relaxed">
            Fundada en junio del 2022 y dedicada a ofrecer el servicio de copias e impresiones en
            distintos materiales como bond, opalina, cartulina majestic, glasse, papel fotográfico,
            adhesivo, entre otros materiales de impresión, junto con diseños creativos que dan vida
            a las ideas de los clientes.
          </p>
        </div>

        <!-- Foto chico + chica juntos -->
        <div class="flex items-end gap-0 z-10">
          <img
            :src="ceos"
            alt="Equipo Silmami"
            class="w-64 object-contain drop-shadow-xl"
            onerror="this.style.display = 'none'"
          />
        </div>
      </div>

      <svg
        class="absolute top-24 -left-50 w-[120%] z-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#009FE3"
          fill-opacity="1"
          d="M0,288L60,261.3C120,235,240,181,360,154.7C480,128,600,128,720,149.3C840,171,960,213,1080,197.3C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>

    <!-- parte 2 -->
    <section class="relative h-[550px] overflow-hidden">
      <div class="relative bg-[#009FE3] py-16 px-16 flex items-center gap-10 overflow-hidden">
        <img
          :src="chico"
          alt="Chico"
          class="w-64 object-contain drop-shadow-xl flex-shrink-0"
          onerror="this.style.display = 'none'"
        />

        <div class="flex-1 text-center z-10">
          <h2 class="text-[#FFED00] text-5xl font-black mb-4">Visión</h2>
          <p class="text-white text-xl leading-relaxed mx-auto text-end">
            "Nuestra visión en Copias Silmami CA es convertirnos en el referente principal en
            servicios de fotocopiado, suministros de papelería y apoyo en tareas escolares en
            nuestra comunidad y más allá. Aspiramos a ser reconocidos por nuestra excelencia en
            atención al cliente, innovación constante y compromiso con la calidad. A medida que
            crecemos, deseamos expandir nuestra gama de servicios y establecer alianzas estratégicas
            que nos permitan ofrecer soluciones aún más completas"
          </p>
        </div>
      </div>

      <svg
        class="absolute top-58 -left-50 w-[120%] z-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#E6007E"
          fill-opacity="1"
          d="M0,288L60,261.3C120,235,240,181,360,154.7C480,128,600,128,720,149.3C840,171,960,213,1080,197.3C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>

    <!-- Sección Misión (fondo rosa) -->
    <section class="relative h-[550px] overflow-hidden">
      <div class="relative bg-[#E6007E] py-16 px-16 flex items-center gap-10 overflow-hidden">
        <div class="text-center z-10">
          <h2 class="text-[#FFED00] text-5xl font-black mb-4">Misión</h2>
          <p class="text-white text-lg leading-relaxed mx-auto text-start">
            "En Copias Silmami CA, nos comprometemos a brindar soluciones integrales de fotocopiado,
            papelería y apoyo en tareas escolares para nuestros clientes. Nuestra misión es
            facilitar y mejorar la vida académica y laboral de estudiantes y profesionales,
            ofreciendo servicios de alta calidad, rapidez y atención personalizada. Buscamos ser el
            aliado confiable al que acudan nuestros clientes en busca de recursos y asistencia,
            contribuyendo así al éxito de sus objetivos educativos y profesionales"
          </p>
        </div>

        <img
          :src="chica"
          alt="Chica"
          class="w-64 object-contain drop-shadow-xl flex-shrink-0"
          onerror="this.style.display = 'none'"
        />
      </div>
      <svg
        class="absolute top-52 -left-50 w-[120%] z-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#FFED00"
          fill-opacity="1"
          d="M0,288L60,261.3C120,235,240,181,360,154.7C480,128,600,128,720,149.3C840,171,960,213,1080,197.3C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>

    <!-- Sección Valores (fondo amarillo) -->
    <section class="bg-[#FFED00] py-16 px-16">
      <h2 class="text-5xl font-black text-center text-gray-900 mb-12">Valores</h2>

      <div class="flex justify-around gap-16">
        <!-- Confianza -->
        <div class="flex flex-col items-center gap-3">
          <img
            :src="iconUno"
            alt="Icono Confianza"
            class="w-58 object-contain"
            onerror="this.style.display = 'none'"
          />

          <h3 class="text-2xl font-black text-gray-900">Confianza</h3>
          <p class="text-gray-800 text-center font-medium">En nuestros<br />Servicios</p>
        </div>

        <!-- Responsabilidad -->
        <div class="flex flex-col items-center gap-3">
          <img
            :src="iconDos"
            alt="Icono Responsabilidad"
            class="w-58 object-contain"
            onerror="this.style.display = 'none'"
          />
          <h3 class="text-2xl font-black text-gray-900">Responsabilidad</h3>
          <p class="text-gray-800 text-center font-medium">En todo lo que<br />hacemos</p>
        </div>

        <!-- Empatía -->
        <div class="flex flex-col items-center gap-3">
          <img
            :src="iconTres"
            alt="Icono Empatía"
            class="w-58 object-contain"
            onerror="this.style.display = 'none'"
          />
          <h3 class="text-2xl font-black text-gray-900">Empatía</h3>
          <p class="text-gray-800 text-center font-medium">Siempre con los<br />Clientes</p>
        </div>
      </div>
    </section>

    <PieDePagina bgClass="bg-black" />
  </div>
</template>
