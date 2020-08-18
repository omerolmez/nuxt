<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <Post
        :post="post"
        v-for="post in posts"
        :is-admin="isAdmin"
        :key="post.id"/>
  </div>
</template>

<script>
import Post from "@/components/post/Post";
export default {
  props: {
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
    posts: {
      required: true,
      type: Array,
      default: []
    }
  },
  components: {
    Post
  }
}
</script>

<style scoped>

</style>
