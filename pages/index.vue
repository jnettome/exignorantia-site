<template>
  <div id="main" class="md:w-full md:h-screen md:flex overflow-auto md:overflow-hidden">
    <div id="fullImage" class="grayscale hover:grayscale-0 h-48 overflow-hidden md:border-r transition-all ease-in-out duration-500 md:w-1/2 md:h-screen bg-no-repeat bg-cover bg-[url('/img/bg-home.jpg')] flex justify-center items-center">
      <img src="/img/logos-home.png" alt="" class="w-48 h-auto" />
    </div>
    <div id="sampleRoute" class="max-h-[40vh] md:max-h-max md:w-1/2 md:h-screen md:overflow-auto">
      <div class="p-4 md:p-16">
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
</template>
