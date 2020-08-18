<template>
  <div class="container">
    <h3>Burası ürün sayfası yani /products </h3>
    <div class="input-container">
      <input type="text" v-model="productID">
      <button class="button--green" @click="showProduct">Ürünü Göster</button>
    </div>
    <div class="input-container">
      <button @click="showEditFunc">Düzenle</button>
      <p v-if="showEdit">
        <input v-model="go" />
        <button @click="goEdit">Edite Git</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productID: null,
      showEdit: false,
      go: null,
    }
  },
  methods: {
    showProduct() {
      this.$router.push("/products/" + this.productID);
    },
    showEditFunc() {
      this.showEdit = !this.showEdit;
    },
    goEdit() {
      this.$router.push("/products/edit/" + this.go)
    }
  }
}
</script>

<style scoped>

</style>
