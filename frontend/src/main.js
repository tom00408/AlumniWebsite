import { createApp } from 'vue'
import './style.css'
import router from "./router";
import App from './App.vue'
import "@fortawesome/fontawesome-free/css/all.css";
import firebaseApp from './firebase';
import { VueFire } from "vuefire";


const app = createApp(App);

app.use(VueFire, {
    firebaseApp
});


app.use(router);
app.mount("#app");
