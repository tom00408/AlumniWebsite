<template>
	<div class="mitglied-formular">
	  <h1>Jetzt Mitglied werden!</h1>
	  <form @submit.prevent="submitForm">
		<div class="input-group">
		  <input v-model="form.name" type="text" placeholder="Name" required />
		  <input v-model="form.vorname" type="text" placeholder="Vorname" required />
		  <input v-model="form.plz" type="text" placeholder="PLZ" pattern="\d{5}" title="Bitte eine gültige PLZ eingeben" required />
		  <input v-model="form.ort" type="text" placeholder="Ort" required />
		  <input v-model="form.geburtstag" type="date" required />
		</div>
		<button type="submit">Registrieren</button>
	  </form>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		form: {
		  name: "",
		  vorname: "",
		  plz: "",
		  ort: "",
		  geburtstag: ""
		}
	  };
	},
	methods: {
	  submitForm() {
		console.log("Formular abgeschickt:", this.form);
		alert("Vielen Dank für Ihre Registrierung!");
	  }
	}
  };
  </script>
  
  <style scoped>
  .mitglied-formular {
	max-width: 400px;
	margin: auto;
	text-align: center;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 10px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
	color: #333;
	margin-bottom: 20px;
  }
  
  .input-group {
	display: flex;
	flex-direction: column;
	gap: 10px;
  }
  
  input {
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
  }
  
  button {
	margin-top: 15px;
	padding: 10px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
  }
  
  button:hover {
	background-color: #0056b3;
  }
  </style>