<template>
  <div>
    <div class="allPosts">
      <h1 class="post_heading">All Posts</h1>
      <div class="mdl-textfield mdl-js-textfield">
        <label class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">search</i>
        </label>
        <input class="mdl-textfield__input" type="text" placeholder="Enter post ID to search">
      </div>
    </div>
    <ViewablePost v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script>
import ViewablePost from "../components/ViewablePost.vue";
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
