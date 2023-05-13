<template>
  <div id="main" class="md:w-full md:h-screen md:flex overflow-auto md:overflow-hidden">
    <div id="fullImage" class="grayscale hover:grayscale-0 h-48 overflow-hidden md:border-r transition-all ease-in-out duration-500 md:w-1/2 md:h-screen bg-no-repeat bg-cover bg-[url('/img/bg-cogito.jpg')] flex justify-center items-center">
      <div class="p-12">
        <img src="/img/logo-cogito.png" alt="" class="w-full h-auto" />
      </div>
    </div>
    <div id="sampleRoute" class="max-h-[40vh] md:max-h-max md:w-1/2 md:h-screen md:overflow-auto">

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
        <div class="block mt-16">

          <a href="#" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
            [BAIXE O STARTER GUIDE GRÁTIS]
          </a>

          <a href="#" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
            [ENCOMENDE SEU COREBOOK FÍSICO OU DIGITAL]
          </a>

          <a href="#" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
            [BAIXE A FICHA EDITÁVEL GRÁTIS]
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
</script>
