import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "vue-query";
// import view
import App from "./App.vue";
import router from "./router";
// import css
import "./assets/styles/main.sass";
/** pluggins */
import "@/pluggins/auth-firebase";
/** locales */
import i18n from "./locales";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(VueQueryPlugin); // vue-query

app.mount("#app");
