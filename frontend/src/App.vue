<template>
  <div class="app-container">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Volle Bildschirmhöhe */
}

main {
  flex: 1; /* Hauptinhalt nimmt den verbleibenden Platz ein */
  padding-top: 200px;
}
</style>
