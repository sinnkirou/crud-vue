<template>
  <div id="AllPosts">
    <div class="navbar">
      <h1 class="post_heading">All Posts</h1>
    </div>
    <ViewablePost v-for="post in posts" v-bind:key="post.id" v-bind:post="post"/>
  </div>
</template>

<script>
import ViewablePost from "./ViewablePost.vue";
export default {
  name: "AllPosts",
  props: {
    posts: Array
  },
  components: {
    ViewablePost
  }
};
</script>
