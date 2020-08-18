<template>
  <div>
    <PostList :posts="fetchedPost"/>
    <About/>
  </div>
</template>

<script>
import PostList from "@/components/post/PostList";
export default {
  components: {
    PostList,
  },
  asyncData(context, callback) {// ssr yapması için created yerine bu func kullanılır...
    setTimeout(() => {
      callback(null, {
        fetchedPost: [{
          id: 1,
          title: "Test Başlığı",
          subTitle: "Test Alt Başlığı",
          text: "Metin lorem impsum dolar sit amaet ",
          author: "Ömer Ölmez"
        },
          {
            id: 2,
            title: "Test Başlığı 2",
            subTitle: "Test Alt Başlığı 2",
            text: "Lorem Metin lorem impsum dolar sit amaet ",
            author: "Ömer Ölmez"
          }]
      });
    }, 2000)
  }
}
</script>

<style scoped>

</style>
