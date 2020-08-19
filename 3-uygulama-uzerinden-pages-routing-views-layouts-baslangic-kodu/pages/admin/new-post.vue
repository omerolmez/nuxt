<template>
  <PostForm @submit="savePost($event)"/>
</template>

<script>
import PostForm from "@/components/admin/PostForm";
import axios from "axios";
export default {
  components: {
    PostForm
  },
  methods: {
    savePost(post) {
      console.log(post);
      this.$store.dispatch("addPost", post)
        .then(response => {
          this.$router.push("/");
        });
      /*
      axios.post("https://kose-yazilari-01.firebaseio.com/posts.json", post)
      .then(response => {
        this.$router.push("/");
      })*/
    }
  }
}
</script>

<style scoped>

</style>
