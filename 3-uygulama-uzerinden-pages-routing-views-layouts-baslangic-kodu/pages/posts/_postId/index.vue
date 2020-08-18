<template>
  <PostDetail :post="fetchedPost"/>
</template>

<script>
import PostDetail from "@/components/post/PostDetail";
export default {
  components: {
    PostDetail
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchedPost: {
          id: "1",
          title: "Naber Nasılsın? (ID Bilgisi: " + context.params.postId + ")",
          subTitle: "Deneme Sub Title",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci blanditiis delectus eligendi et eum fugiat hic laudantium minus odio officia omnis possimus quasi repellat suscipit totam ullam velit veniam?",
          author: "Omer Olmez"
        }
      })
    })
  }
}
</script>

<style scoped>

</style>
