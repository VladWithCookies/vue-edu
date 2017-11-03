<template>
  <article-layout>
    <div class='ui'>
      <div class='ui fluid bordered image'>
        <img :src='article.imageSrc' />
      </div>
      <div class='ui divider' />
      <div class='ui grid'>
        <statistic label='Views' :value='368' />
        <statistic label='Likes' :value='42' />
        <statistic label='Comments' :value='5' />
      </div>
      <div class='ui divider' />
      <div class='ui header'>{{article.title}}</div>
      <div class='ui content mb-60'>{{article.content}}</div>
      <h4 class='ui horizontal divider header'>Comments</h4>
      <comment-form />
      <div class='ui comments'>
        <comment
          v-for='comment in article.comments'
          :key='comment.id'
          :comment='comment'
        />
      </div>
    </div>
  </article-layout>
</template>

<script>
import ArticleLayout from 'components/ArticleLayout'
import CommentForm from './CommentForm'
import Statistic from './Statistic'
import Comment from './Comment'

export default {
  computed: {
    article () {
      return this.$store.state.articles[this.$route.params.id - 1] //FIXME: temp slution
    }
  },
  components: {
    ArticleLayout,
    CommentForm,
    Statistic,
    Comment,
  }
}
</script>
