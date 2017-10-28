<template>
  <article-layout>
    <article-card
      :key='article.id'
      :article='article'
      v-for='article in articles'
    />
  </article-layout>
</template>

<script>
import { mapMutations } from 'vuex'
import ArticleLayout from 'components/ArticleLayout'
import ArticleCard from './ArticleCard'

export default {
  components: {
    ArticleLayout,
    ArticleCard,
  },
  computed: {
    articles () {
      return this.$store.state.articles
    }
  }
}
</script>
