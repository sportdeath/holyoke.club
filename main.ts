import { createApp } from "vue";
import "@picocss/pico/css/pico.classless.fuchsia.min.css";
import Main from "./components/Main.vue";
import House from "./components/House.vue";
import { createRouter, createWebHistory } from "vue-router";

const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  history.replaceState(null, "", redirect);
}

const routes = [
  {
    path: "/h/:house",
    name: "house",
    component: House,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(Main).use(router).mount("#app");
