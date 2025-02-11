<template>
    <div>
      <h2>Aktuelle Wetten</h2>
      <ul>
        <li v-for="bet in bets" :key="bet.id">
          {{ bet.name }} - Quote: {{ bet.odds }}
        </li>
      </ul>
    </div>
</template>
  
  <script setup>
  import { ref } from "vue";
  
  const bets = ref([
    { id: 1, name: "FC Bayern vs. Dortmund", odds: "2.5" },
    { id: 2, name: "Real Madrid vs. Barcelona", odds: "1.8" },
  ]);
  </script>
  