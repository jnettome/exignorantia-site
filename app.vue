<template>
  <div id="app-container">
    <nav class="flex w-screen flex-wrap md:flex-nowrap overflow-hidden">
      <NuxtLink to="/" class="block w-full h-[32px] relative z-10 md:w-16 md:h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black transition">
        <p class="md:-rotate-90 block w-48 whitespace-nowrap text-center">
          [EX IGNORANTIA]
        </p>
      </NuxtLink>
      <transition
        enter-from-class="translate-x-[0%] opacity-0"
        enter-active-class="transition ease-in-out duration-500"
      >
        <div v-if="currentRoute === 'exignorantia'" class="w-full">
          <NuxtPage />
        </div>
      </transition>
      <NuxtLink to="/cogito" class="block w-full h-[32px] relative z-10 md:w-16 md:h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black transition">
        <p class="md:-rotate-90 block w-48 whitespace-nowrap text-center">
          [COGITO]
        </p>
      </NuxtLink>
      <transition
        enter-from-class="translate-x-[0%] opacity-0"
        enter-active-class="transition ease-in-out duration-500"
      >
        <div v-if="currentRoute === 'cogito'" class="w-full">
          <NuxtPage />
        </div>
      </transition>
      <NuxtLink to="/nihilo" class="block w-full h-[32px] relative z-10 md:w-16 md:h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black transition">
        <p class="md:-rotate-90 block w-48 whitespace-nowrap text-center">
          [NIHILO]
        </p>
      </NuxtLink>
      <transition
        enter-from-class="translate-x-[0%] opacity-0"
        enter-active-class="transition ease-in-out duration-500"
      >
        <div v-if="currentRoute === 'nihilo'" class="w-full">
          <NuxtPage />
        </div>
      </transition>
      <NuxtLink to="/extras" class="block w-full h-[32px] relative z-10 md:w-16 md:h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black transition">
        <p class="md:-rotate-90 block w-48 whitespace-nowrap text-center">
          [EXTRAS]
        </p>
      </NuxtLink>
      <transition
        enter-from-class="translate-x-[0%] opacity-0"
        enter-active-class="transition ease-in-out duration-500"
      >
        <div v-if="currentRoute === 'extras'" class="w-full">
          <NuxtPage />
        </div>
      </transition>
      <NuxtLink to="/contato" class="block w-full h-[32px] relative z-10 md:w-16 md:h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black transition">
        <p class="md:-rotate-90 block w-48 whitespace-nowrap text-center">
          [CONTATO]
        </p>
      </NuxtLink>
      <transition
        enter-from-class="translate-x-[0%] opacity-0"
        enter-active-class="transition ease-in-out duration-500"
      >
        <div v-if="currentRoute === 'contato'" class="w-full">
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
</script>
