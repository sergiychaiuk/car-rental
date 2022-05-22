import Vue from "vue";
import VueRouter from "vue-router";
import CarsView from "@/views/CarsView";
import CustomersView from "@/views/CustomersView";

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
  {
    path: "/customers",
    name: "customers",
    component: CustomersView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
