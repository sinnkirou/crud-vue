import Vue from "vue";
import Vuex from "vuex";
import postModule from "./modules/postModule";
import logger from "./plugins/logger";

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    modules: {
      postModule
    },
    plugins: process.env.NODE_ENV !== "production" ? [logger] : []
  });
}
