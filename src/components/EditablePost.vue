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
import { createNamespacedHelpers } from "vuex";
import { ADD_POST, UPDATE_POST } from "../constants/mutation-types";
const { mapMutations } = createNamespacedHelpers("postModule");

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
  methods: {
    reset: function() {
      this.formObj.title = "";
      this.formObj.message = "";
    },
    ...mapMutations([ADD_POST, UPDATE_POST]),
    onSubmit: function() {
      if (!this.post || !this.post.id) {
        this.ADD_POST(this.formObj);
        this.reset();
      } else {
        this.UPDATE_POST(this.formObj);
        this.$emit("toggle-Editable");
      }
    }
  }
};
</script>
