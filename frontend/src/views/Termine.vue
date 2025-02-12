<template>
	<div class="content-page">
		<ul>
			<li v-for="termin in sortedTermine" :key="termin.titel">
				<div class="header">
					<h2>{{ termin.titel }}</h2>
					<p class="bold">
						{{ termin.time }}
					</p>
				</div>
				<p>{{ termin.text }}</p>
				<p>{{ termin.bild_id }}</p>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { computed } from 'vue'; // Importiere computed
import { useCollection } from 'vuefire';
import { collection } from 'firebase/firestore';
import { db } from '../firebase';

const termineRef = collection(db, 'termine');
const termine = useCollection(termineRef);

// Computed Property für die Sortierung
const sortedTermine = computed(() => {
  return termine.value.slice().sort((a, b) => {
    const dateA = a.time.split('.').reverse().join('-'); // DD.MM.YYYY -> YYYY-MM-DD
    const dateB = b.time.split('.').reverse().join('-'); // DD.MM.YYYY -> YYYY-MM-DD
    return new Date(dateA) - new Date(dateB);
  });
});
</script>

<style scoped>
.header {
  background-color: #0985ff;
  border-radius: 12px; /* Fehlende Einheit (px) hinzugefügt */
}

.content-page ul {
  list-style-type: none; /* Entfernt die Aufzählungspunkte */
  padding: 0;
}

.content-page li {
  margin-bottom: 20px; /* Abstand zwischen den Terminen */
  padding: 10px;
  border: 1px solid #ccc; /* Optional: Rahmen für jeden Termin */
  border-radius: 8px; /* Abgerundete Ecken */
}
.bold{
font-weight: bold;  
}
</style>