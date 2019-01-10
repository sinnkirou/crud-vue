<template>
  <div id="app">
    <PostForm v-bind:posts="posts"/>
    <AllPosts v-bind:posts="posts"/>
  </div>
</template>

<script>
import PostForm from "./containers/PostForm.vue";
import AllPosts from "./containers/AllPosts.vue";
import "./assets/stylesheets/material.min.js";

export default {
  name: "app",
  components: {
    PostForm,
    AllPosts
  },
  data: () => ({
    posts: [
      { id: 1, title: "My journey with Vue", message: "My journey with Vue" },
      { id: 2, title: "Blogging with Vue", message: "Blogging with Vue" },
      { id: 3, title: "Why Vue is so fun", message: "Why Vue is so fun" }
    ]
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./assets/stylesheets/style.css";
@import "./assets/stylesheets/material.min.css";
@import "./assets/material-icons/material-icons.css";
</style>
