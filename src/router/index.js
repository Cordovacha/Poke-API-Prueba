// Composables
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/theHome";
import List from "../views/theList.vue";
import listFavorite from "@/views/listFavorite.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/theList",
    name: "theList",
    component: List,
  },
  {
  path: "/ListFavorite",
  name: "listFavorite",
  component: listFavorite,
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
