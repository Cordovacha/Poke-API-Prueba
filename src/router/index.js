// Composables
import { createRouter, createWebHistory } from "vue-router";
import  Home  from "@/views/theHome"
import list from "@/views/theList ";

const routes = [
  {
    path: "/",
    name: "home",
    // eslint-disable-next-line no-undef
    component: Home,
  },
  {
    path: "/theList",
    name: "theList",
    // eslint-disable-next-line no-undef
    component:list,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
