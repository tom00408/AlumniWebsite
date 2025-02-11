<template>
    <div class="content-page">
        <h2>Leaderboard</h2>
        <p>Your Place</p>
        <p>{{ count }}</p>
        <button @click="uprank">Rank up here!</button>
        <ol>
            <li v-for="player in players">
                {{ player.name }} - {{ player.score }}
            </li>
        </ol>
    </div>
  </template>



<script setup>
    import {ref} from "vue";

    const count = ref(999)

    const players = ref([
        {id: 1, name: "Tom", score: 12},
        {id: 2, name: "Emil", score: 6},
        {id: 3, name: "Ben", score: 3}
    ])

    function uprank(){
        count.value--;
    };
</script>
  

<style scoped>

  
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: aquamarine;
  }

    
  

  
  
  </style>
  