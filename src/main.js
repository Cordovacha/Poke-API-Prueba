/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
//install pinia 01/17/24
import { createPinia } from "pinia";

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
registerPlugins(app);

app.mount("#app");
