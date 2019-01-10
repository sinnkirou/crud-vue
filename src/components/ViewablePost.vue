<template>
  <div class="post" key="{{`viewablePost${post.id}`}}">
    <div v-if="!editable">
      <h2 class="post_title">{{post.title}}</h2>
      <p class="post_message">{{post.message}}</p>
      <p class="post_id">{{`id: ${post.id}`}}</p>
      <div class="control_buttons">
        <button class="edit" type="button" @click.prevent="toggleEditable">{{'Edit'}}</button>
        <button class="delete" type="button">{{'Delete'}}</button>
      </div>
    </div>
    <EditablePost
      v-else-if="editable"
      v-bind:posts="posts"
      v-bind:post="post"
      v-bind:toggleEditable="toggleEditable"
    ></EditablePost>
  </div>
</template>

<script>
import EditablePost from "./EditablePost.vue";
export default {
  name: "ViewablePost",
  props: {
    post: Object
  },
  components: {
    EditablePost
  },
  data: () => ({
    editable: false
  }),
  methods: {
    toggleEditable: function() {
      this.editable = !this.editable;
    }
  }
};
</script>