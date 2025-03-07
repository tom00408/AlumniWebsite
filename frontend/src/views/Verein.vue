<template>
	<div class="content-page">
		<h1>Neues aus dem Alumni-Verein</h1>
		<ul>
			<li v-for="c in content" :key="c.titel" class="Content">
				<div class="header">
					<h2>{{ c.titel }}</h2>
					<p v-if="c.time" class="bold">
						{{ c.time }}
					</p>
				</div>
				<ul v-if="c.text">
					<li v-for="t in c.text" :key="t">
						<p>{{ t }}</p>
					</li>
				</ul>
				<ul v-if="c.bild_ids" class="bilder">
					<li v-for="bild_id in c.bild_ids" :key="bild_id">
						<img
							v-if="imageUrls[bild_id]"
							:src="imageUrls[bild_id]"
							:alt="loading" />
						<p v-else>{{ bild_id }}</p>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useCollection } from 'vuefire';
import { collection } from 'firebase/firestore';
import { db } from '../firebase';
import {
	getStorage,
	ref as storageRef,
	getDownloadURL,
} from 'firebase/storage';

const contentRef = collection(db, 'content');
const content = useCollection(contentRef);
const storage = getStorage();
const imageUrls = ref({});

async function getImageUrl(bildId) {
	try {
		const imageRef = storageRef(storage, `content/${bildId}`);
		const url = await getDownloadURL(imageRef);
		return url;
	} catch (error) {
		console.error(`Fehler beim Abrufen der URL für ${bildId}:`, error);
		return null;
	}
}

// Überwachen Sie die 'content'-Daten und laden Sie die Bild-URLs, sobald die Daten verfügbar sind
watch(content, async (newContent) => {
	for (const c of newContent) {
		if (c.bild_ids) {
			for (const bildId of c.bild_ids) {
				if (!imageUrls.value[bildId]) {
					const url = await getImageUrl(bildId);
					if (url) {
						imageUrls.value = { ...imageUrls.value, [bildId]: url };
					}
				}
			}
		}
	}
});
</script>

<style scoped>
.header {
	background-color: #0985ff;
	border-radius: 12px;
}

.content-page ul {
	list-style-type: none;
	padding: 0;
}

.Content {
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 10px;
	margin-bottom: 30px;
}

.bold {
	font-weight: bold;
}

img {
	max-width: 300px;
	border-radius: 30px;
}

.bilder {
	list-style-type: none; /* Entfernt die Standard-Aufzählungszeichen */
	padding: 0;
	margin: 0;
}

.bilder li{
    display: inline-block;
  margin-right: 10px; /* Abstand zwischen den Elementen */
  /* Optional: Feste Breite für die Elemente */
  /* width: 150px; */
}
</style>
