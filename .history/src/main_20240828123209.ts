// main.js or main.ts
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "bootstrap-datepicker";
// import store from "@/store/index";
import store
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/main.css";

import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";

// createApp(App).mount("#app");
const app = createApp(App);

app.use(router);
app.use(store); // Add the store to your app

app.mount("#app");
