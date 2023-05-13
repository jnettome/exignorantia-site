<template>
  <div id="app-container">
    <nav class="flex w-screen flex-wrap md:flex-nowrap overflow-hidden">
      <a @click.stop.prevent="navigateTo('exignorantia')" href="#" class="block w-full h-[32px] relative z-10 md:w-16 md:h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black transition">
        <p class="md:-rotate-90 block w-full h-auto text-center">
          [EX IGNORANTIA]
        </p>
      </a>
      <transition
        enter-from-class="translate-x-[0%] opacity-0"
        enter-active-class="transition ease-in-out duration-500"
      >
        <div v-if="currentRoute === 'exignorantia'">
          <NuxtPage />
        </div>
      </transition>
      <a @click.stop.prevent="navigateTo('cogito')" href="#" class="block w-full h-[32px] relative z-10 md:w-16 md:h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black transition">
        <p class="md:-rotate-90 block w-full h-auto text-center">
          [COGITO]
        </p>
      </a>
      <transition
        enter-from-class="translate-x-[0%] opacity-0"
        enter-active-class="transition ease-in-out duration-500"
      >
        <div v-if="currentRoute === 'cogito'">
          <NuxtPage />
        </div>
      </transition>
      <a @click.stop.prevent="navigateTo('nihilo')" href="#" class="block w-full h-[32px] relative z-10 md:w-16 md:h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black transition">
        <p class="md:-rotate-90 block w-full h-auto text-center">
          [NIHILO]
        </p>
      </a>
      <transition
        enter-from-class="translate-x-[0%] opacity-0"
        enter-active-class="transition ease-in-out duration-500"
      >
        <div v-if="currentRoute === 'nihilo'">
          <NuxtPage />
        </div>
      </transition>
      <a @click.stop.prevent="navigateTo('extras')" href="#" class="block w-full h-[32px] relative z-10 md:w-16 md:h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black transition">
        <p class="md:-rotate-90 block w-full h-auto text-center">
          [EXTRAS]
        </p>
      </a>
      <transition
        enter-from-class="translate-x-[0%] opacity-0"
        enter-active-class="transition ease-in-out duration-500"
      >
        <div v-if="currentRoute === 'extras'">
          <NuxtPage />
        </div>
      </transition>
      <a @click.stop.prevent="navigateTo('contato')" href="#" class="block w-full h-[32px] relative z-10 md:w-16 md:h-screen flex items-center justify-center border p-4 hover:bg-white hover:text-black transition">
        <p class="md:-rotate-90 block w-full h-auto text-center">
          [CONTATO]
        </p>
      </a>
      <transition
        enter-from-class="translate-x-[0%] opacity-0"
        enter-active-class="transition ease-in-out duration-500"
      >
        <div v-if="currentRoute === 'contato'">
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

function navigateTo(routeName) {
  currentRoute.value = routeName
  if (routeName === 'exignorantia') {
    router.push({ path: '/' })
    return
  }
  router.push({ path: routeName })
}
</script>
