import Vue from "vue";
import Vuex from "vuex";
import uuid from "uuid/v1";
import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  ADD_POST_ASYNC
} from "./constants/mutation-types";

Vue.use(Vuex);

const modulePosts = {
  namespaced: true,
  state: {
    posts: [
      {
        id: "45745c60-7b1a-11e8-9c9c-2d42b21b1a3e",
        title: "My journey with Vue",
        message: "My journey with Vue"
      },
      {
        id: "45745c60-7b1a-11e8-9c9c-2d42b21b1a3f",
        title: "Blogging with Vue",
        message: "Blogging with Vue"
      },
      {
        id: "45745c60-7b1a-11e8-9c9c-2d42b21b1a3g",
        title: "Why Vue is so fun",
        message: "Why Vue is so fun"
      }
    ]
  },
  mutations: {
    [ADD_POST](state, formObj) {
      state.posts.push({
        id: uuid(),
        ...formObj
      });
    },
    [DELETE_POST](state, id) {
      state.posts = state.posts.filter(post => {
        return post.id != id;
      });
    },
    [UPDATE_POST](state, formObj) {
      state.posts = state.posts.map(post =>
        post.id === formObj.id ? { ...formObj } : post
      );
    }
  },
  actions: {
    [ADD_POST_ASYNC]({ commit }, formObj) {
      this.formObj = formObj;
      commit(ADD_POST, this.formObj);
    }
  },
  getters: {
    postsCount: state => keyword => {
      var regex = new RegExp(keyword, "i");
      return state.posts.filter(post => !keyword || regex.test(post.title))
        .length;
    }
  }
};

export default new Vuex.Store({
  modules: {
    modulePosts: modulePosts
  }
});
