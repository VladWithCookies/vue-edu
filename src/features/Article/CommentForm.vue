<template>
  <div class='ui form mb-20'>
    <div class='ui field'>
      <textarea-autosize
        v-model.trim='newComment.content'
        placeholder='Leave a comment...'
        rows='1'
      />
    </div>
    <button @click='createComment' class='ui inverted purple button'>
      Submit
    </button>
    <button class='ui secondary button'>Cancel</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    newComment () {
      return this.$store.state.newComment
    },
    articleId () {
      return this.$route.params.id - 1 //FIXME: temp slution
    }
  },
  methods: {
    ...mapMutations([
      'createComment',
    ]),
    createComment () {
      const newComment = this.newComment
      const articleId = this.articleId

      if (!newComment.content) return

      this.$store.commit('createComment', { articleId, newComment })
    }
  }
}
</script>
