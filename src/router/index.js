import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" },
    component: () => import("../views/Home")
  },
  {
    path: "/work",
    name: "Work",
    meta: { layout: "main" },
    component: () => import("../views/Work")
  },
  {
    path: "/about",
    name: "About",
    meta: { layout: "main" },
    component: () => import("../views/About")
  },
  {
    path: "/",
    name: "Blog",
    meta: { layout: "main" },
    component: () => import("../views/Blog")
  },
  {
    path: "/services",
    name: "Services",
    meta: { layout: "main" },
    component: () => import("../views/Services")
  },
  {
    path: "/contact",
    name: "Contact",
    meta: { layout: "main" },
    component: () => import("../views/Contact")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
