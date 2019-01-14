<template>
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
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapState } = createNamespacedHelpers("modulePosts");

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
    PostItem: () => import("../components/PostItem")
  },
  methods: {
    shouldShow: function(title) {
      var regex = new RegExp(this.keyword, "i");
      return !this.keyword || regex.test(title);
    }
  }
};
</script>
