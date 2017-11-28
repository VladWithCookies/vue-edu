<template>
  <article-layout>
    <article-card
      :key='article.id'
      :article='article'
      :deleteArticle='deleteArticle'
      v-for='article in articles'
    />
  </article-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ArticleLayout from 'components/ArticleLayout'
import ArticleCard from './ArticleCard'

export default {
  components: {
    ArticleLayout,
    ArticleCard,
  },
  computed: mapGetters(['articles']),
  methods: {
    ...mapActions(['deleteArticle']),
    deleteArticle (article) {
      this.$store.dispatch('deleteArticle', article)
    }
  }
}
</script>
