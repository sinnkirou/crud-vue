import postModule from "@/store/modules/postModule";
import sinon from "sinon";
import { SET_POSTS } from "@/constants/mutation-types";
import postService from "@/apis/postService";

describe("mutations", () => {
  let mutations;

  beforeEach(() => {
    mutations = postModule.mutations;
  });

  it("ADD_POST", () => {
    const state = { posts: [] };
    const formObj = { title: "title", message: "message" };
    mutations.ADD_POST(state, formObj);
    expect(state.posts.length).toEqual(1);
    expect(state.posts[0].title).toEqual(formObj.title);
    expect(state.posts[0].message).toEqual(formObj.message);
  });

  it("DELETE_POST", () => {
    const state = { posts: [{ title: "title", message: "message", id: "1" }] };
    mutations.DELETE_POST(state, state.posts[0].id);
    expect(state.posts.length).toEqual(0);
  });

  it("UPDATE_POST", () => {
    const state = {
      posts: [
        { title: "title", message: "message", id: "1" },
        { title: "title2", message: "message2", id: "2" }
      ]
    };
    const formObj = { title: "newtitle", message: "newmessage", id: "1" };
    mutations.UPDATE_POST(state, formObj);
    expect(state.posts.length).toEqual(2);
    expect(state.posts[0].title).toEqual(formObj.title);
    expect(state.posts[0].message).toEqual(formObj.message);
  });

  it("SET_POSTS", () => {
    const state = { posts: [] };
    const posts = [{ title: "newtitle", message: "newmessage", id: "1" }];
    mutations.SET_POSTS(state, posts);
    expect(state.posts.length).toEqual(posts.length);
    expect(state.posts).toEqual(posts);
  });
});

describe("actions", () => {
  let actions;
  let sandbox;

  beforeEach(() => {
    actions = postModule.actions;
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("GET_INIT_POSTS_ASYNC", () => {
    const commit = sandbox.spy();
    const posts = [{ title: "title", message: "message", id: "1" }];
    sandbox.stub(postService, "getPosts").callsFake(cb => cb(posts));
    const state = {};

    actions.GET_INIT_POSTS_ASYNC({ commit, state });

    expect(commit.calledOnce).toBeTruthy();
    expect(commit.args[0]).toEqual([SET_POSTS, posts]);
  });
});

describe("getters", () => {
  let getters;

  beforeEach(() => {
    getters = postModule.getters;
  });

  it("postsCount when successfully", () => {
    const state = {
      posts: [
        { title: "title", message: "message", id: "1" },
        { title: "jkhkjh", message: "message", id: "2" }
      ]
    };
    const key = state.posts[0].title;
    expect(getters.postsCount(state)(key)).toEqual(1);
  });

  it("postsCount when unsuccessfully", () => {
    const state = { posts: [{ title: "title", message: "message", id: "1" }] };
    const key = "etest";
    expect(getters.postsCount(state)(key)).toEqual(0);
  });
});
