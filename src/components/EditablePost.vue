<template>
  <div key="EditablePost" class="post">
    <form class="form" v-on:submit.prevent="onSubmit()">
      <input required type="text" placeholder="Enter Post Title" v-model="formObj.title">
      <br>
      <br>
      <textarea required rows="5" cols="28" placeholder="Enter Post" v-model="formObj.message"/>
      <br>
      <br>
      <button
        class="mdl-button mdl-js-button mdl-button--raised"
        type="submit"
      >{{post&&post.id ? "Update": "Create"}}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditablePost",
  props: {
    posts: Array,
    post: Object,
    toggleEditable: Function
  },
  data: function() {
    return {
      formObj: {
        ...this.post
      }
    };
  },
  methods: {
    reset: function() {
      this.formObj.title = "";
      this.formObj.message = "";
    },
    onSubmit: function() {
      if (!this.post || !this.post.id) {
        this.posts.push({
          id: this.posts.length + 1,
          ...this.formObj
        });
        this.reset();
      } else {
        this.toggleEditable();
      }
    }
  }
};
</script>
