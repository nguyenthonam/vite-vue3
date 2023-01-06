import type { Router } from "vue-router";

export default function (router:Router) {
  /** Config */
  // router
  router.addRoute({
    path: "/login",
    name: "login",
    component: () => import("./view/index.vue"),
  });
}