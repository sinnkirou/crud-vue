<template>
  <div class="post" key="{{`PostItem${post.id}`}}">
    <div v-if="!editable">
      <h2 class="post_title">{{post.title}}</h2>
      <p class="post_message">{{post.message}}</p>
      <p class="post_id">{{`id: ${post.id}`}}</p>
      <div class="control_buttons">
        <button class="edit" type="button" @click.prevent="toggleEditable">{{'Edit'}}</button>
        <button class="delete" type="button" @click.prevent="deletePost(post.id)">{{'Delete'}}</button>
      </div>
    </div>
    <EditablePost v-else-if="editable" :post="post" v-on:toggle-Editable="toggleEditable"></EditablePost>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: Object
  },
  components: {
    EditablePost: () => import("./EditablePost")
  },
  data: () => ({
    editable: false
  }),
  inject: ["deletePost"],
  methods: {
    toggleEditable: function() {
      this.editable = !this.editable;
    }
  }
};
</script>