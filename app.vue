<template>
  <div id="app-container">
    <nav class="flex w-screen flex-wrap md:flex-nowrap">
      <a @click.stop.prevent="navigateTo('exignorantia')" href="#" class="block w-full h-[64px] md:w-24 md:h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black">
        <p class="md:-rotate-90">
          [EX IGNORANTIA]
        </p>
      </a>
      <div v-if="currentRoute === 'exignorantia'" id="main" class="md:w-full md:h-screen md:flex">
        <div id="fullImage" class="grayscale hover:grayscale-0 h-48 overflow-hidden md:w-1/2 md:h-screen bg-no-repeat bg-cover bg-[url('/img/bg-home.jpg')] flex justify-center items-center">
          <img src="/img/logos-home.png" alt="" class="w-48 h-auto" />
        </div>
        <div id="sampleRoute" class="max-h-[40vh] md:max-h-max md:w-1/2 overflow-auto md:h-screen">

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
      <a @click.stop.prevent="navigateTo('cogito')" href="#" class="block w-full h-[64px] md:w-24 md:h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black">
        <p class="md:-rotate-90">
          [COGITO]
        </p>
      </a>
      <div v-if="currentRoute === 'cogito'" id="main" class="md:w-full md:h-screen md:flex">
        <div id="fullImage" class="grayscale hover:grayscale-0 h-48 overflow-hidden md:w-1/2 md:h-screen bg-no-repeat bg-cover bg-[url('/img/bg-cogito.jpg')] flex justify-center items-center">
          <img src="/img/logo-cogito.png" alt="" class="w-48 h-auto" />
        </div>
        <div id="sampleRoute" class="max-h-[40vh] md:max-h-max md:w-1/2 overflow-auto md:h-screen">

          <div class="p-16">
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
      <a @click.stop.prevent="navigateTo('nihilo')" href="#" class="block w-full h-[64px] md:w-24 md:h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black">
        <p class="md:-rotate-90">
          [NIHILO]
        </p>
      </a>
      <div v-if="currentRoute === 'nihilo'" id="main" class="md:w-full md:h-screen md:flex">
        <div id="fullImage" class="grayscale hover:grayscale-0 h-48 overflow-hidden md:w-1/2 md:h-screen bg-no-repeat bg-cover bg-[url('/img/bg-nihilo.jpg')] flex justify-center items-center">
          <img src="/img/logo-nihilo.png" alt="" class="w-48 h-auto" />
        </div>
        <div id="sampleRoute" class="max-h-[40vh] md:max-h-max md:w-1/2 overflow-auto md:h-screen">

          <div class="p-16">
            <p class="mb-4">
              Nihilo é um jogo de interpretação de papéis sobre humanos que ultrapassaram as próprias limitações através da Magicka. Nele, o fantástico e o mundano se misturam de maneira orgânica, mesmo que longe do conhecimento geral. 
            </p>
            <p class="mb-4">
              Crie e refine suas próprias magias em conjunto com narradores e explore ilimitadas possibilidades de jogo nesta vasta e misteriosa realidade.
            </p>
            <p class="mb-4">
              Torne-se um Magus e leve sua obsessão às últimas consequências.Explore o desconhecido e dobre-o a sua vontade. Investigue um mundo escondido, lapide seu poder, faça do nada, tudo.
            </p>
            <div class="block mt-16">

              <a href="#" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
                [BAIXE O STARTER GUIDE GRÁTIS]
              </a>

              <a href="#" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
                [ENCOMENDE SEU COREBOOK FÍSICO OU DIGITAL]
              </a>

              <div class="flex">
                <a href="#" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
                  [BAIXE A FICHA]
                </a>
                <a href="#" class="p-8 border block mb-8 text-center hover:bg-white hover:text-black">
                  [TRILHA OFICIAL]
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a @click.stop.prevent="navigateTo('extras')" href="#" class="block w-full h-[64px] md:w-24 md:h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black">
        <p class="md:-rotate-90">
          [EXTRAS]
        </p>
      </a>
      <div v-if="currentRoute === 'extras'" id="main" class="md:w-full md:h-screen md:flex">
        <div id="fullImage" class="grayscale hover:grayscale-0 h-48 overflow-hidden md:w-1/2 md:h-screen bg-no-repeat bg-cover bg-[url('/img/bg-extras.jpg')] flex justify-center items-center">
        </div>
        <div id="sampleRoute" class="max-h-[40vh] md:max-h-max md:w-1/2 overflow-auto md:h-screen">

          <div class="p-16">
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
              >> ADQUIRA SEU PACOTE
            </p>
          </div>

          <div class="p-16">
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
              >> ADQUIRA SEU PACOTE
            </p>
          </div>

          <div class="p-16">
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
              >> ADQUIRA SEU PACOTE
            </p>
          </div>
        </div>
      </div>
      <a @click.stop.prevent="navigateTo('contato')" href="#" class="block w-full h-[64px] md:w-24 md:h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black">
        <p class="md:-rotate-90">
          [CONTATO]
        </p>
      </a>
      <div v-if="currentRoute === 'contato'" id="main" class="w-full md:w-full md:h-screen md:flex">
        <div id="fullImage" class="grayscale hover:grayscale-0 h-48 overflow-hidden md:w-1/2 md:h-screen bg-no-repeat bg-cover bg-[url('/img/bg-contato.jpg')] flex justify-center items-center">
        </div>
        <div id="sampleRoute" class="max-h-[40vh] md:max-h-max md:w-1/2 overflow-auto md:h-screen">
          <div class="p-16">
            <p class="mb-4">
              [SEJA PARTE DA COMUNIDADE]
            </p>

            <nav class="flex">
              <a href="#" class="flex items-center justify-center p-8 bg-white color-black w-16 h-16 rounded-full">
                discord
              </a>
              <a href="#" class="flex items-center justify-center p-8 bg-white color-black w-16 h-16 rounded-full">
                twitch
              </a>
            </nav>
          </div>

          <div class="p-16">
            <p class="mb-4">
              [SIGA NOSSAS REDES SOCIAIS]
            </p>

            <nav class="flex">
              <a href="#" class="flex items-center justify-center p-8 bg-white color-black w-16 h-16 rounded-full">
                instagram
              </a>
              <a href="#" class="flex items-center justify-center p-8 bg-white color-black w-16 h-16 rounded-full">
                youtube
              </a>
              <a href="#" class="flex items-center justify-center p-8 bg-white color-black w-16 h-16 rounded-full">
                facebook
              </a>
              <a href="#" class="flex items-center justify-center p-8 bg-white color-black w-16 h-16 rounded-full">
                spotify
              </a>
            </nav>
          </div>

          <div class="p-16">
            <p class="mb-4">
              [ENTRE EM CONTATO]
            </p>

            <nav class="flex">
              <a href="#" class="flex items-center justify-center p-8 bg-white color-black w-16 h-16 rounded-full">
                email
              </a>
              <a href="#" class="flex items-center justify-center p-8 bg-white color-black w-16 h-16 rounded-full">
                whatsapp
              </a>
            </nav>
          </div>
        </div>
      </div>

    </nav>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentRoute = ref('exignorantia')

function navigateTo(routeName) {
  currentRoute.value = routeName
}
</script>
