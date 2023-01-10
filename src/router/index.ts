import { createRouter, createWebHistory } from "vue-router";
// import page
import home from "@/pages/home/index";
import about from "@/pages/about/index";
import signin from "@/pages/sign-in/index";
import signup from "@/pages/sign-up/index";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
});

/** add pages */
home(router);
about(router);
signin(router);
signup(router);

export default router;
