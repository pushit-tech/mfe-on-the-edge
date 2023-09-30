<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <nav class="bg-gray-800 text-white p-4">
    <a href="/shell" class="text-blue-500 hover:underline focus:underline focus:outline-none">Marvel</a>
    <span class="mx-2 text-gray-400">|</span>
    <a href="/shell/one-pice" class="text-blue-500 hover:underline focus:underline focus:outline-none">One Piece</a>
    <span class="mx-2 text-gray-400">|</span>
    <a href="/edge/pokemon" class="text-yellow-500 hover:underline focus:underline focus:outline-none">edge pokemon</a>
    <span class="mx-2 text-gray-400">|</span>
    <a href="/edge/rick-morty" class="text-yellow-500 hover:underline focus:underline focus:outline-none">edge rick-morty</a>
    <span class="mx-2 text-gray-400">|</span>
    <a href="/edge/vanilla" class="text-yellow-500 hover:underline focus:underline focus:outline-none">edge vanilla</a>
  </nav>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
