<template>
  <div id="app-container">
    <nav class="flex w-screen flex-wrap md:flex-nowrap overflow-hidden">
      <NuxtLink to="/" class="block w-full h-[32px] relative z-10 md:w-16 md:h-screen flex items-center justify-center border border-b-0 p-4 hover:bg-white hover:text-black transition md:border-b md:border-r-0">
        <p class="md:-rotate-90 block w-48 whitespace-nowrap text-center">
          [EX IGNORANTIA]
        </p>
      </NuxtLink>
      <transition
        enter-from-class="translate-x-[0%] opacity-0"
        enter-active-class="transition ease-in-out duration-500"
      >
        <div v-if="currentRoute === 'exignorantia'" class="w-full border-t md:border-t-0 border-x md:border-x-0 md:border-l">
          <NuxtPage />
        </div>
      </transition>
      <NuxtLink to="/cogito" class="block w-full h-[32px] relative z-10 md:w-16 md:h-screen flex items-center justify-center border border-b-0 p-4 hover:bg-white hover:text-black transition md:border-b md:border-r-0">
        <p class="md:-rotate-90 block w-48 whitespace-nowrap text-center">
          [COGITO]
        </p>
      </NuxtLink>
      <transition
        enter-from-class="translate-x-[0%] opacity-0"
        enter-active-class="transition ease-in-out duration-500"
      >
        <div v-if="currentRoute === 'cogito'" class="w-full border-t md:border-t-0 border-x md:border-x-0 md:border-l">
          <NuxtPage />
        </div>
      </transition>
      <NuxtLink to="/nihilo" class="block w-full h-[32px] relative z-10 md:w-16 md:h-screen flex items-center justify-center border border-b-0 p-4 hover:bg-white hover:text-black transition md:border-b md:border-r-0">
        <p class="md:-rotate-90 block w-48 whitespace-nowrap text-center">
          [NIHILO]
        </p>
      </NuxtLink>
      <transition
        enter-from-class="translate-x-[0%] opacity-0"
        enter-active-class="transition ease-in-out duration-500"
      >
        <div v-if="currentRoute === 'nihilo'" class="w-full border-t md:border-t-0 border-x md:border-x-0 md:border-l">
          <NuxtPage />
        </div>
      </transition>
      <NuxtLink to="/extras" class="block w-full h-[32px] relative z-10 md:w-16 md:h-screen flex items-center justify-center border border-b-0 p-4 hover:bg-white hover:text-black transition md:border-b md:border-r-0">
        <p class="md:-rotate-90 block w-48 whitespace-nowrap text-center">
          [EXTRAS]
        </p>
      </NuxtLink>
      <transition
        enter-from-class="translate-x-[0%] opacity-0"
        enter-active-class="transition ease-in-out duration-500"
      >
        <div v-if="currentRoute === 'extras'" class="w-full border-t md:border-t-0 border-x md:border-x-0 md:border-l">
          <NuxtPage />
        </div>
      </transition>
      <NuxtLink to="/contato" class="block w-full h-[32px] relative z-10 md:w-16 md:h-screen flex items-center justify-center border border-b p-4 hover:bg-white hover:text-black transition md:border-b md:border-r-0">
        <p class="md:-rotate-90 block w-48 whitespace-nowrap text-center">
          [CONTATO]
        </p>
      </NuxtLink>
      <transition
        enter-from-class="translate-x-[0%] opacity-0"
        enter-active-class="transition ease-in-out duration-500"
      >
        <div v-if="currentRoute === 'contato'" class="w-full md:border-t-0 border-x md:border-x-0 md:border-l">
          <NuxtPage />
        </div>
      </transition>
      <transition
        enter-from-class="translate-x-[0%] opacity-0"
        enter-active-class="transition ease-in-out duration-500"
      >
        <div v-if="currentRoute === 'catalogo'" class="w-full md:border-t-0 border-x md:border-x-0 md:border-l">
          <NuxtPage />
        </div>
      </transition>
    </nav>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const router = useRouter()

const currentRoute = ref('exignorantia')

watch(() => router.currentRoute.value.path, (path) => {
  checkRoute(path)
})

const checkRoute = (path) => {
  currentRoute.value = path.replace('/', '')

  if (currentRoute.value === '') {
    currentRoute.value = 'exignorantia'
  }
}

// immediate
checkRoute(router.currentRoute.value.path)

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - EX.IGNORANTIA` : 'EX.IGNORANTIA';
  }
})

useSeoMeta({
  ogImage: 'https://exignorantia-site.vercel.app/og.png',
  twitterCard: 'summary',
})
</script>
