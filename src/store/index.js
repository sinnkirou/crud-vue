import Vue from "vue";
import Vuex from "vuex";
import postModule from "./modules/postModule";
import logger from "./plugins/logger";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    postModule
  },
  plugins: process.env.NODE_ENV !== "production" ? [logger] : []
});

if (module.hot) {
  // 使 action 和 mutation 成为可热重载模块
  module.hot.accept(["./modules/postModule"], () => {
    // 获取更新后的模块
    // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
    const newPostModule = require("./modules/postModule").default;
    // 加载新模块
    store.hotUpdate({
      modules: {
        postModule: newPostModule
      }
    });
  });
}

export default store;
