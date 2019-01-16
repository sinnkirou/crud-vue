import uuid from "uuid/v1";
import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  SET_POSTS,
  GET_POSTS_ASYNC
} from "../../constants/mutation-types";
import postService from "../../apis/postService";

const mutations = {
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
  },
  [SET_POSTS](state, posts) {
    state.posts = posts;
  }
};

const actions = {
  [GET_POSTS_ASYNC]({ commit }) {
    postService.getPosts(posts => {
      commit(SET_POSTS, posts);
    });
  }
};

const getters = {
  postsCount: state => keyword => {
    var regex = new RegExp(keyword, "i");
    return state.posts.filter(post => !keyword || regex.test(post.title))
      .length;
  }
};

export default {
  namespaced: true,
  state: {
    posts: []
  },
  mutations,
  actions,
  getters
};
