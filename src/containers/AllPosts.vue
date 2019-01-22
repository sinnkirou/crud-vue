<template>
  <transition name="fade">
    <div>
      <div class="allPosts">
        <h1 class="post_heading">All Posts {{postsCount(keyword)}}</h1>
        <div class="mdl-textfield mdl-js-textfield">
          <label class="mdl-button mdl-js-button mdl-button--icon">
            <i class="material-icons">search</i>
          </label>
          <input
            class="mdl-textfield__input"
            type="text"
            placeholder="Enter post title to search"
            v-model="keyword"
          >
        </div>
      </div>
      <PostItem v-for="post in posts" :key="post.id" :post="post" v-show="shouldShow(post.title)"/>
    </div>
  </transition>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapState } = createNamespacedHelpers("postModule");

export default {
  name: "AllPosts",
  computed: {
    ...mapState(["posts"]),
    ...mapGetters(["postsCount"])
  },
  data: () => ({
    keyword: ""
  }),
  components: {
    PostItem: () =>
      import(/* webpackChunkName: "PostItem" */ "../components/PostItem")
  },
  methods: {
    shouldShow: function(title) {
      var regex = new RegExp(this.keyword, "i");
      return !this.keyword || regex.test(title);
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
