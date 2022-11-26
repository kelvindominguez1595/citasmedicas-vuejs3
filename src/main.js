import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import VueAxios from "vue-axios";
import store from "@/storage";

import "@/assets/bootstrap.min.css";
import "@/assets/bootstrap.bundle.min.js";
import axios from "@/services";

createApp(App).use(router).use(store).use(VueAxios, axios).mount("#app");
