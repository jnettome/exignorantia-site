<template>
  <div id="main" class="md:w-full md:h-screen md:flex overflow-auto md:overflow-hidden">
    <div id="fullImage" class="grayscale hover:grayscale-0 h-48 overflow-hidden md:border-r md:border-y border-b transition-all ease-in-out duration-500 md:w-1/2 md:h-screen bg-no-repeat bg-center bg-cover bg-[url('/img/bg-nihilo.jpg')] flex justify-center items-center">
      <div class="p-12">
        <img src="/img/logo-nihilo.png" alt="" class="w-full h-auto" />
      </div>
    </div>
    <div id="sampleRoute" class="max-h-[40vh] md:max-h-max md:w-1/2 md:h-screen md:overflow-auto md:border-y">

      <div class="p-4 md:p-16">
        <p class="mb-4">
          Nihilo é um jogo de interpretação de papéis sobre humanos que ultrapassaram as próprias limitações através da Magicka. Nele, o fantástico e o mundano se misturam de maneira orgânica, mesmo que longe do conhecimento geral. 
        </p>
        <p class="mb-4">
          Crie e refine suas próprias magias em conjunto com narradores e explore ilimitadas possibilidades de jogo nesta vasta e misteriosa realidade.
        </p>
        <p class="mb-4">
          Torne-se um Magus e leve sua obsessão às últimas consequências.Explore o desconhecido e dobre-o a sua vontade. Investigue um mundo escondido, lapide seu poder, faça do nada, tudo.
        </p>
        <div class="block mt-32">

          <a href="https://drive.google.com/file/d/18xE-HCXfzb7KpoLqy-zmfs8wfUqsSukG/view" target="_blank" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
            [BAIXE O STARTER GUIDE GRÁTIS]
          </a>

          <a href="https://forms.gle/ybGHjQiKrw5dnnit6" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
            [ENCOMENDE SEU COREBOOK FÍSICO OU DIGITAL]
          </a>

          <!-- <div class="flex w-full"> -->
          <a href="https://drive.google.com/file/d/1fZ5KnHHatzwhdzkdOxSz6lEjJFJb3sPU/view" target="_blank" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
            [BAIXE A FICHA]
          </a>
          <a href="https://open.spotify.com/album/6BR1QponccJHSuR2rAqWlG?si=vuB08Ot6T6eWb9bUF_rKWg" target="_blank" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
            [TRILHA OFICIAL]
          </a>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Nihilo'
})
useSeoMeta({
  ogTitle: 'Nihilo - EX.IGNORANTIA',
  ogDescription: 'Nihilo é um jogo de interpretação de papéis sobre humanos que ultrapassaram as próprias limitações através da Magicka. Nele, o fantástico e o mundano se misturam de maneira orgânica, mesmo que longe do conhecimento geral. ',
  description: 'Nihilo é um jogo de interpretação de papéis sobre humanos que ultrapassaram as próprias limitações através da Magicka. Nele, o fantástico e o mundano se misturam de maneira orgânica, mesmo que longe do conhecimento geral. ',
  ogImage: 'https://exignorantia-site.vercel.app/og.png',
  twitterCard: 'summary',
  // twitterCard: 'summary_large_image',
})
</script>
