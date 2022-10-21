import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SlikeView from "../views/SlikeView.vue";
import IkoneView from "../views/IkoneView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/slike/",
    name: "slike",
    component: SlikeView,
  },
  {
    path: "/ikone/",
    name: "ikone",
    component: IkoneView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
