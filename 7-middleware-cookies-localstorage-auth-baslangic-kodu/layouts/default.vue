<template>
  <div>
    <Header/>
    <nuxt/>
  </div>
</template>
<script>
import Header from "@/components/Header";

export default {
  components: {
    Header
  },
  //middleware: ["auth", "session-control"],// alayına uygulandı... :)
}
</script>
