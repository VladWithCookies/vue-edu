<template>
  <div class='article-layout'>
    <navbar />
    <slot />
    <main-footer />
  </div>
</template>

<script>
import Navbar from './Navbar'
import MainFooter from './MainFooter'

export default {
  name: 'article-layout',
  components: {
    Navbar,
    MainFooter,
  }
}
</script>

<style>
.article-layout {
  margin: 5% 20% 0 20%;
}
</style>
