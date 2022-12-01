import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView";
import store from "@/storage";
import ReservacionView from "@/views/reservaciones/ReservacionView";
import ReservacionFormView from "@/views/reservaciones/ReservacionFormView";
import ReservacionEditFormView from "@/views/reservaciones/ReservacionEditFormView";
import ReservacionRemoveView from "@/views/reservaciones/ReservacionRemoveView";
import ReservacionCalendarView from "@/views/reservaciones/ReservacionCalendarView";
import CategoriasView from "@/views/categories/CategoriasView";
import CategoriasFormView from "@/views/categories/CategoriasFormView";
import CategoriasEditFormView from "@/views/categories/CategoriasEditFormView";
import CategoriasRemoveView from "@/views/categories/CategoriasRemoveView";
import GenerosView from "@/views/generos/GenerosView";
import GenerosFormView from "@/views/generos/GenerosFormView";
import GenerosEditFormView from "@/views/generos/GenerosEditFormView";
import GenerosRemoveView from "@/views/generos/GenerosRemoveView";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/reservaciones",
    name: "reservaciones",
    component: ReservacionView,
  },
  {
    path: "/crearreservacion",
    name: "crearreservacion",
    component: ReservacionFormView,
  },
  {
    path: "/editreservacion/:uid",
    name: "editreservacion",
    component: ReservacionEditFormView,
  },
  {
    path: "/removereservacion/:uid",
    name: "removereservacion",
    component: ReservacionRemoveView,
  },
  {
    path: "/calendarreservations",
    name: "calendarreservations",
    component: ReservacionCalendarView,
  },
  {
    path: "/categorias",
    name: "categorias",
    component: CategoriasView,
  },
  {
    path: "/createcategoria",
    name: "createcategoria",
    component: CategoriasFormView,
  },
  {
    path: "/editcategoria/:uid",
    name: "editcategoria",
    component: CategoriasEditFormView,
  },
  {
    path: "/removecategoria/:uid",
    name: "removecategoria",
    component: CategoriasRemoveView,
  },
  {
    path: "/generos",
    name: "generos",
    component: GenerosView,
  },
  {
    path: "/creategeneros",
    name: "creategeneros",
    component: GenerosFormView,
  },
  {
    path: "/editgeneros/:uid",
    name: "editgeneros",
    component: GenerosEditFormView,
  },
  {
    path: "/removegeneros/:uid",
    name: "removegeneros",
    component: GenerosRemoveView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// esto evita entrar si estar autentificado
router.beforeEach(async (to) => {
  const publicPages = ["/"];
  const authRequired = !publicPages.includes(to.path);
  const auth = store.state.isAuthenticated;
  if (authRequired && !auth) {
    return "/";
  }
});
export default router;
