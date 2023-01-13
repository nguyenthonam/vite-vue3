import type { Router } from "vue-router";

export default function (router:Router) {
  /** Config */
  // router
  router.addRoute({
    path: "/sign-in",
    name: "sign-in",
    component: () => import("./view/index.vue"),
  });
}