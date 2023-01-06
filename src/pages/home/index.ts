import type { Router } from "vue-router";

export default function (router:Router) {
  /** Config */
  // router
  router.addRoute({
    path: "/",
    name: "home",
    component: () => import("./view/index.vue"),
  });
}