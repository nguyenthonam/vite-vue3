import type { Router } from "vue-router";

export default function (router:Router) {
  /** Config */
  // router
  router.addRoute({
    path: "/about",
    name: "about",
    component: () => import("./view/index.vue"),
  });
}