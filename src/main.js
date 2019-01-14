import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.use(VueRouter);

const routes = [
  { path: "/", component: () => import("./containers/PostForm") },
  { path: "/posts", component: () => import("./containers/AllPosts") }
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
