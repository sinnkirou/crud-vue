import Vue from "vue";
import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "PostForm" */ "./containers/PostForm")
  },
  {
    path: "/posts",
    component: () =>
      import(/* webpackChunkName: "AllPosts" */ "./containers/AllPosts")
  }
];

Vue.use(VueRouter);

export function createRouter() {
  return new VueRouter({
    mode: "history",
    routes
  });
}
