import { createApp } from "vue";
import "@picocss/pico/css/pico.classless.fuchsia.min.css";
import MapView from "./components/MapView.vue";

const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  history.replaceState(null, "", redirect);
}

createApp(MapView).mount("#app");
