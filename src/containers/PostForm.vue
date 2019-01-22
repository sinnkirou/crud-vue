<template>
  <transition name="slide">
    <div>
      <div class="navbar">
        <h2 class="center">Post It</h2>
      </div>
      <div class="post_container" key="PostForm">
        <h1 class="post_heading">Create Post</h1>
        <EditablePost/>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PostForm",
  components: {
    EditablePost: () =>
      import(/* webpackChunkName: "EditablePost" */ "../components/EditablePost")
  }
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s;
}
.slide-enter, .slide-leave-to /* .slide-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>