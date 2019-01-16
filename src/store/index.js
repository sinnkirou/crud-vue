import Vue from "vue";
import Vuex from "vuex";
import postModule from "./modules/postModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    postModule
  }
});
