import { createRouter, createWebHistory } from "vue-router";
import PokemonView from "../views/PokemonView.vue";
import PokemonDescription from "@/components/PokemonDescription.vue";

const routes = [
  {
    path: "/",
    name: "PokemonView",
    component: PokemonView,
  },
  {
    path: "/detail/:id",
    name: "PokemonDescription",
    props: true,
    component: PokemonDescription,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
