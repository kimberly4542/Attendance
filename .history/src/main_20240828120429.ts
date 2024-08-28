import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
// main.js or main.ts
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "bootstrap-datepicker";
import store from "@/store/index";
import "@fortawesome/fontawesome-free/css/all.min.css";

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap first
import './assets/main.css'; // Your custom styles or Tailwind CSS should come after Bootstrap


import { createApp } from "vue";
import "@/assets/main.css";
import App from "./layout/Dashboard.vue";
import router from "./router";

// createApp(App).mount("#app");
const app = createApp(App);

app.use(router);
// app.use(store); // Add the store to your app

app.mount("#app");
