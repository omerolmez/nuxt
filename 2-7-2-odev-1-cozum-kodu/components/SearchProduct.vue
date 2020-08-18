<template>
  <div class="input-container">
    <input type="text" v-model="productID">
    <button class="button--green" @click="showProduct"> Ürünü Göster</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      productID : null
    }
  },
  methods : {
    showProduct(){
      this.$router.push("/products/" + this.productID)
    }
  }
}
</script>

<style scoped>
.input-container{
  padding: 20px;
  text-align: center;
  border: 1px solid #688fb9;
//margin-top: 50px;
  background-color: #35495e;
  box-shadow: 2px 3px 8px rgba(0,0,0,.1);

}

input{
  border: none;
  outline: none;
  height: 30px;
  font-size: 18px;
  color: #35495e;
}
</style>
