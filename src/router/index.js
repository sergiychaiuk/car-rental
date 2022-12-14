import Vue from "vue";
import VueRouter from "vue-router";
import CarsView from "@/views/CarsView";
import CustomersView from "@/views/CustomersView";
import ReservationsView from "@/views/ReservationsView";
import DirectoriesView from "@/views/DirectoriesView";

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
  {
    path: "/reservations",
    name: "reservations",
    component: ReservationsView,
  },
  {
    path: "/directories",
    name: "directories",
    component: DirectoriesView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
