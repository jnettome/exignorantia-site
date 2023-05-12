<template>
  <div id="app-container">
    <nav class="flex w-screen flex-nowrap">
      <a href="#" class="w-24 h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black">
        <p class="-rotate-90">
          [EX IGNORANTIA]
        </p>
      </a>
      <div v-if="true" id="main" class="w-full h-screen flex">
        <div id="fullImage" class="grayscale hover:grayscale-0 w-1/2 h-screen bg-no-repeat bg-cover bg-[url('/img/bg-home.jpg')] flex justify-center items-center">
          <img src="/img/logos-home.png" alt="" class="w-48 h-auto" />
        </div>
        <div id="sampleRoute" class="w-1/2 overflow-auto h-screen">

          <div class="p-16">
            <p class="mb-4">
              Ex Ignorantia é um coletivo multidisciplinar e selo independente explorando realidades e narrativas através de RPGs, arte, literatura e worldbuilding.
            </p>
            <p class="mb-4">
              Entre nossas principais criações estão o cenário de fantasia moderna Mundo Invisível — uma realidade parecida com a nossa, habitado por seres misteriosos e magistas transumanistas, e o Sistema Signum, conjunto de regras de absorção simples utilizado em nossos jogos.
            </p>

            <div class="block mt-16">
              <a href="#" class="p-4 border rounded-full block mb-16 text-center bg-white text-black hover:bg-black hover:text-white">
                [PACOTE INTRODUTÓRIO FREE]
              </a>

              <a href="#" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
                [CONHEÇA NOSSO CATÁLOGO]
              </a>

              <a href="#" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
                [SEJA PARTE DA COMUNIDADE NO DISCORD]
              </a>

              <a href="#" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
                [CONHEÇA A CAMPANHA DO NOSSO ÚLTIMO LANÇAMENTO]
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="#" class="w-24 h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black">
        <p class="-rotate-90">
          [COGITO]
        </p>
      </a>
      <a href="#" class="w-24 h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black">
        <p class="-rotate-90">
          [NIHILO]
        </p>
      </a>
      <a href="#" class="w-24 h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black">
        <p class="-rotate-90">
          [EXTRAS]
        </p>
      </a>
      <a href="#" class="w-24 h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black">
        <p class="-rotate-90">
          [CONTATO]
        </p>
      </a>
    </nav>

  </div>
</template>
