<template>
  <!--TODO: implement it -->
  <p>{{article.title}}</p>
</template>

<script>
export default {
  computed: {
    article () {
      return this.$store.state.articles[0] //TODO: temp solution
    }
  },
}
</script>
