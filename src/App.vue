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
import { createNamespacedHelpers } from "vuex";
import { GET_INIT_POSTS_ASYNC } from "./constants/mutation-types";
const { mapActions } = createNamespacedHelpers("postModule");

export default {
  name: "app",
  methods: {
    ...mapActions([GET_INIT_POSTS_ASYNC])
  },
  created: function() {
    this.GET_INIT_POSTS_ASYNC();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./assets/stylesheets/style.css";
@import "./assets/stylesheets/material.min.css";
@import "./assets/material-icons/material-icons.css";
</style>
