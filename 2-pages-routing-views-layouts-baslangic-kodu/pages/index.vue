<template>
  <section class="container">
    <h1 class="title">Ana Sayfa</h1>
    <p class="subtitle">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid atque autem, consectetur corporis cumque eaque earum est fuga labore libero maiores mollitia numquam perspiciatis quam quasi quisquam quo, soluta!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio dolor dolore eius mollitia quia reprehenderit? Delectus dolor, dolore eos eum, expedita ipsa modi, quidem quos sequi sit ullam voluptas?
    </p>

    <div class="button-container">
      <a href="/products" class="button--green">Ürünler (Server Side Rendering)</a>
      <nuxt-link to="/products" tag="a" class="button--green">Ürünler</nuxt-link>
    </div>
  </section>
</template>

<script>

export default {

}
</script>

<style>

.container {
  min-height: 100vh;
  text-align: center;
  margin-top: 50px;
}
.button-container {
  margin-top: 50px;
  border: 1px solid #392;
  background-color: #dedede;
  padding: 10px;
  box-shadow: 2px 3px 8px rgba(0, 0, 0, .1);
  display: flex;
  justify-content: center;
}
.button--green {
  margin-left: 5px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
