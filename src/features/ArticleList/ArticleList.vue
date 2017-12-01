<template>
  <div>
    <article-layout>
      <article-card
        :key='article.id'
        :article='article'
        :deleteArticle='deleteArticle'
        v-for='article in articles'
      />
    </article-layout>
    <empty-list v-if='showEmptyList' />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { isEmpty } from 'lodash'
import ArticleLayout from 'components/ArticleLayout'
import ArticleCard from './ArticleCard'
import EmptyList from 'components/EmptyList'

export default {
  components: {
    ArticleLayout,
    ArticleCard,
    EmptyList,
  },
  computed: {
    ...mapGetters(['articles']),
    showEmptyList () {
      return isEmpty(this.  articles)
    }
  },
  methods: {
    ...mapActions(['deleteArticle']),
    deleteArticle (article) {
      this.$store.dispatch('deleteArticle', article)
    }
  }
}
</script>
