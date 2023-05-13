<template>
  <div id="main" class="md:w-full md:h-screen md:flex overflow-auto md:overflow-hidden">
    <div id="fullImage" class="grayscale hover:grayscale-0 h-48 overflow-hidden md:border-r transition-all ease-in-out duration-500 md:w-1/2 md:h-screen bg-no-repeat bg-cover bg-[url('/img/bg-contato.jpg')] flex justify-center items-center">
      <!-- <img src="/img/logo-cogito.png" alt="" class="w-48 h-auto" /> -->
    </div>
    <div id="sampleRoute" class="max-h-[40vh] md:max-h-max md:w-1/2 md:h-screen md:overflow-auto">
      <div class="p-4 md:p-16 border-b">
        <p class="mb-4">
          [SEJA PARTE DA COMUNIDADE]
        </p>

        <nav class="flex space-x-3">
          <a href="#" class="w-12 h-auto block bg-black transition hover:border-2 hover:border-black hover:invert hover:shadow-2xl hover:shadow-white rounded-full">
            <img class="w-full h-auto" src="/img/icons/discord.png" alt="discord" />
          </a>
          <a href="#" class="w-12 h-auto block bg-black transition hover:border-2 hover:border-black hover:invert hover:shadow-2xl hover:shadow-white rounded-full">
            <img class="w-full h-auto" src="/img/icons/twitch.png" alt="twitch" />
          </a>
        </nav>
      </div>

      <div class="p-4 md:p-16 border-b">
        <p class="mb-4">
          [SIGA NOSSAS REDES SOCIAIS]
        </p>

        <nav class="flex space-x-3">
          <a href="#" class="w-12 h-auto block bg-black transition hover:border-2 hover:border-black hover:invert hover:shadow-2xl hover:shadow-white rounded-full">
            <img class="w-full h-auto" src="/img/icons/instagram.png" alt="instagram" />
          </a>
          <a href="#" class="w-12 h-auto block bg-black transition hover:border-2 hover:border-black hover:invert hover:shadow-2xl hover:shadow-white rounded-full">
            <img class="w-full h-auto" src="/img/icons/youtube.png" alt="youtube" />
          </a>
          <a href="#" class="w-12 h-auto block bg-black transition hover:border-2 hover:border-black hover:invert hover:shadow-2xl hover:shadow-white rounded-full">
            <img class="w-full h-auto" src="/img/icons/facebook.png" alt="facebook" />
          </a>
          <a href="#" class="w-12 h-auto block bg-black transition hover:border-2 hover:border-black hover:invert hover:shadow-2xl hover:shadow-white rounded-full">
            <img class="w-full h-auto" src="/img/icons/spotify.png" alt="spotify" />
          </a>
        </nav>
      </div>

      <div class="p-4 md:p-16 border-b">
        <p class="mb-4">
          [ENTRE EM CONTATO]
        </p>

        <nav class="flex space-x-3">
          <a href="#" class="w-12 h-auto block bg-black transition hover:border-2 hover:border-black hover:invert hover:shadow-2xl hover:shadow-white rounded-full">
            <img class="w-full h-auto" src="/img/icons/email.png" alt="email" />
          </a>
          <a href="#" class="w-12 h-auto block bg-black transition hover:border-2 hover:border-black hover:invert hover:shadow-2xl hover:shadow-white rounded-full">
            <img class="w-full h-auto" src="/img/icons/whatsapp.png" alt="whatsapp" />
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Contato'
})
</script>
