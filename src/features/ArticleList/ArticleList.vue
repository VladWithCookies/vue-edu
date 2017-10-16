<template>
  <div>
    <article-card
      :key='article.id'
      :article='article'
      v-for='article in articles'
    />
  </div>
</template>

<script>
import ArticleCard from './ArticleCard.vue'

export default {
  components: {
    ArticleCard,
  },
  props: ['articles'],
}
</script>
