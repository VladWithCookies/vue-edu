<template>
  <div id="app">
    <article-layout>
      <article-form v-bind='{createArticle, newArticle}' />
      <article-list :articles='articles' />
    </article-layout>
  </div>
</template>

<script>
import { Mixin } from 'semantic-ui-vue2'
import ArticleLayout from './components/ArticleLayout.vue'
import ArticleList from './features/ArticleList/ArticleList.vue'
import ArticleForm from './features/ArticleList/ArticleForm.vue'

export default {
  name: 'app',
  mixins: [Mixin],
  components: {
    ArticleLayout,
    ArticleList,
    ArticleForm,
  },
  data: () => ({
    newArticle: {
      title: '',
      content: ''
    },
    articles: [
      {
        title: 'Article title',
        content: 'Article content'
      },
      {
        title: 'Another article title',
        content: 'Another article content'
      }
    ]
  }),
  methods: {
    createArticle () {
      const newArticle = this.newArticle

      if (!newArticle.content || !newArticle.title) return

      this.articles.push(newArticle)
      this.newArticle = {
        title: '',
        content: ''
      }
    }
  }
}
</script>

<style>
button, input, textarea {
  border-radius: 0 !important;
}
.mb-20 {
  margin-bottom: 20px;
}
.mb-60 {
  margin-bottom: 60px;
}
</style>
