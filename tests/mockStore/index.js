import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import postModule from "../../src/store/modules/postModule";
import _ from "lodash";

export const posts = [
  {
    id: "1",
    title: "title",
    message: "message"
  }
];
postModule.state.posts = _.clone(posts);

export const localVue = createLocalVue();
localVue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    postModule
  }
});
