import { createApp } from "vue";
import { createPinia } from "pinia";
// import view
import App from "./App.vue";
import router from "./router";
// import css
import "./assets/css/main.sass";

/** pluggins */
import "@/pluggins/auth-firebase";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
