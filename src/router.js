import Vue from "vue";
import VueRouter from "vue-router";

const routes = [
  { path: "/", component: () => import("./containers/PostForm") },
  { path: "/posts", component: () => import("./containers/AllPosts") }
];

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes
});
