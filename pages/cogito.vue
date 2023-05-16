<template>
  <div id="main" class="md:w-full md:h-screen md:flex overflow-auto md:overflow-hidden">
    <div id="fullImage" class="grayscale hover:grayscale-0 h-48 overflow-hidden md:border-r md:border-y border-b transition-all ease-in-out duration-500 md:w-1/2 md:h-screen bg-no-repeat bg-center bg-cover bg-[url('/img/bg-cogito.jpg')] flex justify-center items-center">
      <div class="p-12">
        <img src="/img/logo-cogito.png" alt="" class="w-full h-auto" />
      </div>
    </div>
    <div id="sampleRoute" class="max-h-[40vh] md:max-h-max md:w-1/2 md:h-screen md:overflow-auto md:border-y">

      <div class="p-4 md:p-16">
        <p class="mb-4">
          Cogito é um jogo sobre Anjos, Caídos e Demônios vivendo entre a humanidade. Você não os vê, não é? Comendo nos mesmos restaurantes imundos, bebendo da mesma água clorada, pagando os mesmos impostos. Você não os vê, vê?
        </p>
        <p class="mb-4">
          Sem um Céu e um Inferno propriamente ditos, Anjos e Demônios  terão de viver vidas semi-normais, lidando com empregos e filas de metrô, mas também conciliando seus deveres Celestes e Infernais com suas vidas cotidianas.
        </p>
        <p class="mb-4">
          Crie Relíquias únicas, objetos de poder que se desenvolvem com seus portadores, expanda sua influência, combata inimigos e tente sobreviver a mais um dia na Grande Guerra que transita entre sobrenatural e mundano.
        </p>
        <div class="block mt-32">

          <a href="https://drive.google.com/file/d/1t7Uq8dbAGfTL0DY6rkiFJ8cXVUy8rkUF/view?usp=share_link" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
            [BAIXE O STARTER GUIDE GRÁTIS]
          </a>

          <a href="https://forms.gle/ybGHjQiKrw5dnnit6" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
            [ENCOMENDE SEU COREBOOK FÍSICO OU DIGITAL]
          </a>

          <a href="https://drive.google.com/file/d/1dQNAAq8eojkGeLsLO1o50xXE5dH5M8jS/view" target="_blank" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
            [BAIXE A FICHA EDITÁVEL GRÁTIS]
          </a>

          <a href="https://www.amazon.com.br/dp/B09PY482YP/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=38STOVF0HYN76&keywords=cogito+rpg&qid=1641525603&sprefix=cogito+rp%2Caps%2C223&sr=8-1" target="_blank" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
            [EBOOK AMAZON]
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Cogito'
})
useSeoMeta({
  ogTitle: 'Cogito - EX.IGNORANTIA',
  ogDescription: 'Cogito é um jogo sobre Anjos, Caídos e Demônios vivendo entre a humanidade. Você não os vê, não é? Comendo nos mesmos restaurantes imundos, bebendo da mesma água clorada, pagando os mesmos impostos. Você não os vê, vê?',
  description: 'Cogito é um jogo sobre Anjos, Caídos e Demônios vivendo entre a humanidade. Você não os vê, não é? Comendo nos mesmos restaurantes imundos, bebendo da mesma água clorada, pagando os mesmos impostos. Você não os vê, vê?',
  ogImage: 'https://exignorantia-site.vercel.app/og.png',
  twitterCard: 'summary',
  // twitterCard: 'summary_large_image',
})
</script>
