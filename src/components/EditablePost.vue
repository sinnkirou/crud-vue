<template>
  <div class="post" key="{{`EditablePost${post.id}`}}">
    <form class="form" @submit.prevent="onSubmit">
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
    post: Object
  },
  data: function() {
    return {
      formObj: {
        ...this.post
      }
    };
  },
  inject: ["addPost", "updatePost"],
  methods: {
    reset: function() {
      this.formObj.title = "";
      this.formObj.message = "";
    },
    onSubmit: function() {
      if (!this.post || !this.post.id) {
        this.addPost(this.formObj);
        this.reset();
      } else {
        this.updatePost(this.formObj);
        this.$emit("toggle-Editable");
      }
    }
  }
};
</script>
