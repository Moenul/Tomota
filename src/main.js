import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import clickOutside from "./directives/click/clickOutside";
import carouselSlide from "./directives/carousel/carouselSlide";

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(pinia);
app.directive("click-outside", clickOutside);
app.directive("carousel-slide", carouselSlide);
app.mount("#app");
