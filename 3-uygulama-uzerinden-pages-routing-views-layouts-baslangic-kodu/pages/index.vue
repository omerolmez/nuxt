<template>
  <div>
    <PostList :posts="fetchedPosts"/>
    <About/>
  </div>
</template>

<script>
import PostList from "@/components/post/PostList";
import About from "@/components/home/About";
export default {
  components: {
    PostList,
    About
  },/*
  data() {
    return {
      fetchedPost: []
    }
  },*/

  created() {
    //this.$store.dispatch("setPosts", this.fetchedPosts);
  },
  computed: {
    fetchedPosts() {
      return this.$store.getters.getPosts;
    }
  },/*
  fetch(context) {
    // ssr yapması için created yerine bu func kullanılır... (context, callback) olunca callback silinmezse sıçtın :)
    console.log(context);
    return new Promise((resolve, reject) => {
      context.store.dispatch("setPosts", [{
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
        }]);
      resolve()
      //reject(new Error());
    }).then(data => {
      return data;
    }).catch(e => {
      context.error(e);
      //context.error(new Error());
    })
  }*/
  /*asyncData(context) {// ssr yapması için created yerine bu func kullanılır... (context, callback) olunca callback silinmezse sıçtın :)
    console.log(context);
    return new Promise((resolve, reject) => {
      resolve({ //callback(new Error(), { bu şekilde çakılıyor.
        fetchedPosts: [{
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
      })
      //reject(new Error());
    }).then(data => {
      return data;
    }).catch(e => {
      context.error(e);
      //context.error(new Error());

    })

  }*/
  /*
      setTimeout(() => {
        callback(null, { //callback(new Error(), { bu şekilde çakılıyor.
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
      }, 2000)*/
}
</script>

<style scoped>

</style>
