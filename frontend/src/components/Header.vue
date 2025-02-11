<template>
	<header>
		<h1 v-if="extended">Alumni-Verein des Hainberg Gymnasiums</h1>
		<nav>
			<router-link to="/">Startseite</router-link>
			<router-link to="/termine">Termine</router-link>
			<router-link to="/verein">Verein</router-link>
			<router-link to="/mitglied-werden">Mitglied werden</router-link>
		</nav>
	</header>
</template>

<script setup>
import { ref } from "vue";
  const extended = ref(true)
</script>

<style scoped>
header {
	width: 100%; /* Volle Breite */
	height: 200px;
	background: #0563bf;
	color: white;
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: fixed; /* Fixiert den Header oben */
	top: 0;
	left: 0;
	z-index: 1000;
}

nav a {
	margin: 0 10px;
	color: black;
	text-decoration: none;
	font-weight: bold;
}
</style>
