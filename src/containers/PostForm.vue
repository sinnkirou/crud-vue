<template>
  <div>
    <div class="navbar">
      <h2 class="center">Post It</h2>
    </div>
    <div class="post_container" key="PostForm">
      <h1 class="post_heading">Create Post</h1>
      <EditablePost/>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostForm",
  methods: {},
  components: {
    EditablePost: () => import("../components/EditablePost")
  }
};
</script>
