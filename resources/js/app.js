import { createApp } from "vue";
import "./bootstrap.js";
import App from "./components/app.vue";
import router from "./routers/index.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
