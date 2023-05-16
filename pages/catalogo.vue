<template>
  <div id="main" class="md:w-full md:h-screen md:flex overflow-auto md:overflow-hidden">
    <!-- <div id="fullImage" class="grayscale hover:grayscale-0 h-48 overflow-hidden md:border-r transition-all ease-in-out duration-500 md:w-1/2 md:h-screen bg-no-repeat bg-cover bg-[url('/img/bg-extras.jpg')] flex justify-center items-center">
    </div> -->
    <div id="sampleRoute" class="max-h-[40vh] md:max-h-max md:w-full md:h-screen md:overflow-auto">
      <div class="p-4 text-center border-y">
        <h4>[COGITO]</h4>
      </div>

      <div class="md:flex border-b md:divide-x">
        <div class="md:w-1/2">
          <div class="text-center p-12 flex items-center h-full">
            <img src="/img/preview-cogito.png" alt="Preview Cogito" class="w-64 h-auto mx-auto">
            <!-- border -->
          </div>
        </div>
        <div class="md:w-1/2">
          <div class="p-12">
            <p class="mb-4">Anjos e Demônios, caminham entre nós. Vivem e trabalham como nós, comem nos mesmos restaurantes imundos e bebem da mesma água clorada. Você não os vê, vê?</p>

            <p class="mb-4">Por trás do pano de realidade imposta, o Mundo Invisível de Cogito é o cenário de uma batalha eterna travada entre combatentes milenares atrás da expansão de suas influências e poderes.</p>

            <p class="mb-4">Cogito Ergo Sum SeculariaPenso, logo, sou mundano.</p>

            <p class="mb-4">O Corebook de Cogito possui 180 páginas contendo tudo que narradores e jogadores precisam para criar e interpretar Anjos, Caídos e Demônios, assim como interagir com o Mundo Invisível utilizando nosso sistema original, Signum.</p>

            <a href="#" target="_blank" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black mt-12">
              [COREBOOK FÍSICO & DIGITAL]
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Catálogo'
})
useSeoMeta({
  ogTitle: 'Catálogo - EX.IGNORANTIA',
  ogDescription: 'Ex Ignorantia é um coletivo multidisciplinar e selo independente explorando realidades e narrativas através de RPGs, arte, literatura e worldbuilding.',
  description: 'Ex Ignorantia é um coletivo multidisciplinar e selo independente explorando realidades e narrativas através de RPGs, arte, literatura e worldbuilding.',
  ogImage: 'https://exignorantia-site.vercel.app/og.png',
  twitterCard: 'summary',
  // twitterCard: 'summary_large_image',
})
</script>
