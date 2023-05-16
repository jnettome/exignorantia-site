<template>
  <div id="main" class="md:w-full md:h-screen md:flex overflow-auto md:overflow-hidden">
    <div id="fullImage" :class="imageClass">
      <img src="/img/logos-home.png" alt="" class="w-48 h-auto hidden md:block" />
      <img src="/img/logo-horizontal.png" alt="" class="w-full h-auto md:hidden p-8" />
    </div>
    <div id="sampleRoute" class="max-h-[40vh] md:max-h-max md:w-1/2 md:h-screen md:overflow-auto md:border-y">
      <div class="p-4 md:p-16">
        <p class="mb-4">
          Ex Ignorantia é um coletivo multidisciplinar e selo independente explorando realidades e narrativas através de RPGs, arte, literatura e worldbuilding.
        </p>
        <p class="mb-4">
          Entre nossas principais criações estão o cenário de fantasia moderna Mundo Invisível — uma realidade parecida com a nossa, habitado por seres misteriosos e magistas transumanistas, e o Sistema Signum, conjunto de regras de absorção simples utilizado em nossos jogos.
        </p>

        <div class="block mt-32">
          <a v-if="false" href="https://drive.google.com/drive/folders/1gxPPyTgBqHZk6XfDLCWKGBx0RlAFlkyw?usp=share_link" target="_blank" class="p-4 border rounded-full block mb-16 text-center bg-white text-black hover:bg-black hover:text-white">
            [PACOTE INTRODUTÓRIO FREE]
          </a>

          <router-link to="/catalogo" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
            [CONHEÇA NOSSO CATÁLOGO]
          </router-link>

          <a href="https://discord.com/invite/zPwepJq" target="_blank" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
            [SEJA PARTE DA COMUNIDADE NO DISCORD]
          </a>

          <a href="https://www.catarse.me/nihilorpg" target="_blank" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
            [CONHEÇA A CAMPANHA DO NOSSO ÚLTIMO LANÇAMENTO]
          </a>

          <a href="https://drive.google.com/drive/folders/1gxPPyTgBqHZk6XfDLCWKGBx0RlAFlkyw?usp=share_link" target="_blank" class="p-8 border block mb-8 text-center bg-white text-black hover:bg-black hover:text-white">
            [PACOTE INTRODUTÓRIO FREE]
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  ogTitle: 'EX.IGNORANTIA',
  ogDescription: 'Ex Ignorantia é um coletivo multidisciplinar e selo independente explorando realidades e narrativas através de RPGs, arte, literatura e worldbuilding.',
  description: 'Ex Ignorantia é um coletivo multidisciplinar e selo independente explorando realidades e narrativas através de RPGs, arte, literatura e worldbuilding.',
  ogImage: 'https://exignorantia-site.vercel.app/og.png',
  twitterCard: 'summary',
  // twitterCard: 'summary_large_image',
})

const imageClass = ref('')
imageClass.value = "h-48 overflow-hidden hover:grayscale-0 md:border-r md:border-y border-b transition-all ease-in-out duration-500 md:w-1/2 md:h-screen bg-no-repeat bg-center bg-cover bg-[url('/img/bg-home.jpg')] flex justify-center items-center"
setTimeout(() => {
  imageClass.value = "grayscale h-48 overflow-hidden hover:grayscale-0 md:border-r md:border-y border-b transition-all ease-in-out duration-500 md:w-1/2 md:h-screen bg-no-repeat bg-center bg-cover bg-[url('/img/bg-home.jpg')] flex justify-center items-center"
}, 250)
</script>
