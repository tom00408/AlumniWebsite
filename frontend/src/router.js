import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Termine from "./views/Termine.vue";
import Verein from "./views/Verein.vue";
import Galerie from "./views/Galerie.vue"
import MitgliedWerden from "./views/MitgliedWerden.vue";
import Impressum from "./views/Impressum.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/termine", component: Termine },
  { path: "/verein", component: Verein },
  { path: "/galerie", component: Galerie },
  { path: "/mitglied-werden", component : MitgliedWerden},
  { path: "/impressum", component: Impressum}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
