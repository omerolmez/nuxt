<template>
  <PostForm @submit="updatePost($event)" :is-update="true" :post="loadedPost"/>
</template>

<script>
import PostForm from "@/components/admin/PostForm";
import axios from "axios";
export default {
  components: {
    PostForm
  },
  asyncData(context) {
    return axios.get("https://kose-yazilari-01.firebaseio.com/posts/" + context.params.postId  + ".json")
        .then(response => {
          return {
            loadedPost: response.data
          }
        })
  },
  methods: {
    updatePost(editedPost) {
      this.$store.dispatch("updatePost", {...editedPost, id: this.$route.params.postId })
        .then(response => {
          this.$router.push("/admin");
        })

    }
  }
  /*
  data() {
    return {
      loadedPost: {
        id: 1,
        title: "Test Başlığı",
        subTitle: "Test Alt Başlığı",
        text: "Metin lorem impsum dolar sit amaet ",
        author: "Ömer Ölmez"
      }
    }
  }*/
}
</script>

<style scoped>

</style>
