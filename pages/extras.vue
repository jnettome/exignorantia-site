<template>
  <div id="main" class="md:w-full md:h-screen md:flex overflow-auto md:overflow-hidden">
    <div id="fullImage" :class="imageClass">
    </div>
    <div id="sampleRoute" class="max-h-[40vh] md:max-h-max md:w-1/2 md:h-screen md:overflow-auto md:border-y">

      <div class="p-4 md:p-16 border-b">
        <p class="mb-4">
          [NARRATIVAS PRONTAS]
        </p>

        <p class="mb-4">
          Aventuras, investigações, explorações e muito mais, prontíssimas pra rodar com a sua mesa! Incluem personagens prontos com fichas, encontros, inimigos e todos os guias para narradores conduzirem o jogo.
        </p>

        <p class="mb-4">
          Pacotes de Narrativas disponíveis para Cogito e Nihilo!
        </p>

        <p class="mb-4">
          <a href="https://forms.gle/ybGHjQiKrw5dnnit6" target="_blank" class="hover:text-underline">
            >> ADQUIRA SEU PACOTE
          </a>
        </p>
      </div>

      <div class="p-4 md:p-16 border-b">
        <p class="mb-4">
          [SUPLEMENTOS DE JOGO]
        </p>

        <p class="mb-4">
          Materiais que expandem as possibilidades de jogo com locais e épocas diferentes, espalhadas pela história do Mundo Invisível, assim como diferentes tipos de personagens jogáveis para compor seu grupo!
        </p>

        <p class="mb-4">
          Pacotes de Suplementos disponíveis para Cogito, Nihilo e Mundo Invisível!
        </p>

        <p class="mb-4">
          <a href="https://forms.gle/ybGHjQiKrw5dnnit6" target="_blank" class="hover:text-underline">
            >> ADQUIRA SEU PACOTE
          </a>
        </p>
      </div>

      <div class="p-4 md:p-16">
        <p class="mb-4">
          [MICRO RPGs]
        </p>

        <p class="mb-4">
          RPGs simples e prontos pra rodar com pouco ou nenhum planejamento, em formato de panfleto pra você levar pra onde quiser!
        </p>

        <p class="mb-4">
          Materiais não necessitam corebooks e já possuem tudo para serem rodados.
        </p>

        <p class="mb-4">
          <a href="https://forms.gle/ybGHjQiKrw5dnnit6" target="_blank" class="hover:text-underline">
            >> ADQUIRA SEU PACOTE
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Extras'
})
useSeoMeta({
  ogTitle: 'Extras - EX.IGNORANTIA',
  ogDescription: 'Ex Ignorantia é um coletivo multidisciplinar e selo independente explorando realidades e narrativas através de RPGs, arte, literatura e worldbuilding.',
  description: 'Ex Ignorantia é um coletivo multidisciplinar e selo independente explorando realidades e narrativas através de RPGs, arte, literatura e worldbuilding.',
  ogImage: 'https://exignorantia-site.vercel.app/og.png',
  twitterCard: 'summary',
  // twitterCard: 'summary_large_image',
})

const imageClass = ref('')
imageClass.value = "hover:grayscale-0 h-48 overflow-hidden md:border-r md:border-y border-b transition-all ease-in-out duration-500 md:w-1/2 md:h-screen bg-no-repeat bg-center bg-cover bg-[url('/img/bg-extras.jpg')] flex justify-center items-center"
setTimeout(() => {
  imageClass.value = "grayscale hover:grayscale-0 h-48 overflow-hidden md:border-r md:border-y border-b transition-all ease-in-out duration-500 md:w-1/2 md:h-screen bg-no-repeat bg-center bg-cover bg-[url('/img/bg-extras.jpg')] flex justify-center items-center"
}, 250)
</script>
