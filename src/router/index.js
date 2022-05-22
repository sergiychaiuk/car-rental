import Vue from "vue";
import VueRouter from "vue-router";
import CarsView from "@/views/CarsView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/cars",
    component: CarsView,
  },
  {
    path: "/cars",
    name: "cars",
    component: CarsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
