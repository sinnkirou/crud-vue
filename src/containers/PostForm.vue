<template>
  <div>
    <div class="navbar">
      <h2 class="center">Post It</h2>
    </div>
    <div class="post_container" key="PostForm">
      <h1 class="post_heading">Create Post</h1>
      <EditablePost :posts="posts"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostForm",
  props: {
    posts: Array
  },
  methods: {},
  components: {
    EditablePost: () => import("../components/EditablePost")
  }
};
</script>
