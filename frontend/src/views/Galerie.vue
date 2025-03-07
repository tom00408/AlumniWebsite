<template>
    <div class="galerie-container">
      <h1>Bilder-Galerie des Alumni-Vereins</h1>
      <ul>
        <li v-for="c in content" :key="c.titel" class="content-item">
          <div class="header">
            <h2>{{ c.titel }}</h2>
          </div>
          <div class="bild-container">
            <img v-if="imageUrls[c.bild_id]" :src="imageUrls[c.bild_id]" :alt="c.titel" class="bild" />
            <p v-else>{{ c.bild_id }}</p>
          </div>
          <p>{{ c.text }}</p>
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
  
  const contentRef = collection(db, 'galerie');
  const content = useCollection(contentRef);
  const storage = getStorage();
  const imageUrls = ref({});
  
  async function getImageUrl(bildId) {
    try {
      const imageRef = storageRef(storage, `galerie/${bildId}`);
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
      if (c.bild_id && !imageUrls.value[c.bild_id]) {
        const url = await getImageUrl(c.bild_id);
        if (url) {
          imageUrls.value = { ...imageUrls.value, [c.bild_id]: url };
        }
      }
    }
  });
  </script>
  
  <style scoped>
  .galerie-container {
    max-width: 800px;
    margin: auto;
    text-align: center;
    padding: 20px;
  }
  
  h1 {
    color: #333;
    margin-bottom: 20px;
  }
  
  .content-item {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 30px;
    background-color: #f9f9f9;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .header {
    background-color: #0985ff;
    border-radius: 12px;
    padding: 10px;
    color: white;
  }
  
  .bild-container {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  
  .bild {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }
  </style>
  