<template>
  <div>
    <div class="navbar">
      <h2 class="center">Post It</h2>
    </div>
    <div class="post_container" key="PostForm">
      <h1 class="post_heading">Create Post</h1>
      <EditablePost :posts="posts" :addPost="addPost"/>
    </div>
  </div>
</template>

<script>
import EditablePost from "../components/EditablePost.vue";
export default {
  name: "PostForm",
  props: {
    posts: Array
  },
  methods: {
    addPost: function(formObj) {
      this.posts.push({
        id: this.posts.length + 1,
        ...formObj
      });
    }
  },
  components: {
    EditablePost
  }
};
</script>
