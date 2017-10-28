<template>
  <article-layout>
    <div class='ui'>
      <div class='ui fluid image'>
        <img :src='article.imageSrc' />
      </div>
      <div class='ui header'>
        {{article.title}}
      </div>
      <div class='ui content'>
        {{article.content}}
      </div>
      <h4 class="ui horizontal divider header">Comments</h4>
      <div class='ui comments'>
        <comment />
      </div>
    </div>
  </article-layout>
</template>

<script>
import ArticleLayout from 'components/ArticleLayout'
import Comment from './Comment'

export default {
  computed: {
    article () {
      return this.$store.state.articles[this.$route.params.id - 1] //TODO: temp solution
    }
  },
  components: {
    ArticleLayout,
    Comment,
  }
}
</script>
