import Vue from "vue";
import Vuex from "vuex";
import postModule from "./modules/postModule";
import logger from "./plugins/logger";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    postModule
  },
  plugins: process.env.NODE_ENV !== "production" ? [logger] : []
});
