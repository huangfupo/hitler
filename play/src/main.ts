import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Hitler from "../../packages/hitler";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(ElementPlus);
app.use(Hitler, { env: import.meta.env, router });
app.mount("#app");
