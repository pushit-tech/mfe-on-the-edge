<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="coming-soon-container">
    <div class="logo">Marvels characters</div>
    <h1>Coming Soon</h1>
    <div class="countdown">
      <p>Our website is under construction.</p>
      <p>Stay tuned for something amazing!</p>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f0f0f0;
  font-family: "Arial", sans-serif;
}
.coming-soon-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 4rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  font-size: 3rem;
  color: #3366ff;
  margin-bottom: 1rem;
}
h1 {
  font-size: 2rem;
  color: #333;
  margin: 1rem 0;
}
.countdown {
  font-size: 2rem;
  color: #666;
  margin: 1rem 0;
}
.message {
  font-size: 1.2rem;
  color: #666;
  margin: 1rem 0;
}
</style>
