<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
   <Header></Header>
  <main role="main">
    <RouterView></RouterView>

  </main>
   <Footer></Footer>
</template>

<style scoped>

</style>
