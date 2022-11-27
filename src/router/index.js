import { createRouter, createWebHistory } from "vue-router";
import PokemonView from "../views/PokemonView.vue";

const routes = [
  {
    path: "/",
    name: "PokemonView",
    component: PokemonView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
