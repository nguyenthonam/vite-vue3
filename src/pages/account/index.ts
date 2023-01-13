import type { Router } from "vue-router";
import useFirebase from "@/composables/useFirebase";

export default function (router: Router) {
  const { getCurrentUserFirebase } = useFirebase();
  /** Config */
  // router
  router.addRoute({
    path: "/account",
    name: "account",
    component: () => import("./view/index.vue"),
    meta: {
      requireAuth: true,
    },
  });
  router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requireAuth)) {
      if (await getCurrentUserFirebase()) {
        next();
      } else {
        alert("Not Allow Access!");
        next("/");
      }
    } else {
      next();
    }
  });
}
