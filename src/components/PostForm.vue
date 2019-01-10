<template>
  <div id="PostForm">
    <div class="navbar">
      <h2 class="center">Post It</h2>
    </div>
    <div class="post_container" key="PostForm">
      <h1 class="post_heading">Create Post</h1>
      <EditablePost v-bind:posts="posts"/>
    </div>
  </div>
</template>

<script>
import EditablePost from "./EditablePost.vue";
export default {
  name: "PostForm",
  props: {
    posts: Array
  },
  components: {
    EditablePost
  }
};
</script>
