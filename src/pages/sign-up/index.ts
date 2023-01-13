import type { Router } from "vue-router";

export default function (router:Router) {
  /** Config */
  // router
  router.addRoute({
    path: "/sign-up",
    name: "sign-up",
    component: () => import("./view/index.vue"),
  });
}