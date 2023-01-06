import { createRouter, createWebHistory } from "vue-router";
// import page
import login from "@/pages/login/index";
import home from "@/pages/home/index";
import about from "@/pages/about/index";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
});

/** add pages */
home(router);
login(router);
about(router);

export default router;
