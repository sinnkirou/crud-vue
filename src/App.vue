<template>
  <div id="app">
    <button
      id="demo-menu-lower-left"
      class="mdl-button mdl-js-button mdl-button--icon"
      type="button"
    >
      <i class="material-icons">more_vert</i>
    </button>
    <ul
      class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
      for="demo-menu-lower-left"
    >
      <li class="mdl-menu__item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="mdl-menu__item">
        <router-link to="/posts">Posts</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import "./assets/stylesheets/material.min.js";
import uuid from "uuid/v1";

export default {
  name: "app",
  data: () => ({
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
  }),
  methods: {
    addPost: function(formObj) {
      this.posts.push({
        id: uuid(),
        ...formObj
      });
    },
    deletePost: function(id) {
      this.posts = this.posts.filter(post => {
        return post.id != id;
      });
    },
    updatePost: function(formObj) {
      this.posts = this.posts.map(post =>
        post.id === formObj.id ? { ...formObj } : post
      );
    }
  },
  provide: function() {
    return {
      addPost: this.addPost,
      deletePost: this.deletePost,
      updatePost: this.updatePost
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./assets/stylesheets/style.css";
@import "./assets/stylesheets/material.min.css";
@import "./assets/material-icons/material-icons.css";
</style>
