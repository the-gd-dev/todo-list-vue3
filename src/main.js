import "./assets/main.css";

import { createApp } from "vue";
import App from "./index.vue";

import WelcomeView from "./index.vue";
import { createRouter } from "vue-router";
import { createMemoryHistory } from "vue-router";

const routes = [{ path: "/", component: WelcomeView }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
