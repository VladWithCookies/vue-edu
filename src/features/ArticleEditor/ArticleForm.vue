<template>
  <article-layout class='mb-60'>
    <div class='ui form'>
      <div class='ui fluid image'>
        <img :src='newArticle.imageSrc' />
      </div>
      <div class='file-input'>
        <label for='file' class='ui icon button'>
          <i class='file icon' />
          Add image
        </label>
        <input
          @change='uploadImage'
          style='display: none'
          accept='image/*'
          type='file'
          id='file'
        />
      </div>

      <div class='field'>
        <input placeholder='Title' v-model.trim='newArticle.title' />
      </div>

      <div class='field'>
        <textarea v-model.trim='newArticle.content' rows='15' />
      </div>

      <button @click='createArticle' class='ui inverted purple button'>
        Submit
      </button>
      <button class='ui secondary button'>Cancel</button>
    </div>
  </article-layout>
</template>

<script>
import moment from 'moment'
import { mapMutations } from 'vuex'
import ArticleLayout from 'components/ArticleLayout'

export default {
  components: {
    ArticleLayout,
  },
  computed: {
    newArticle () {
      return this.$store.state.newArticle
    }
  },
  methods: {
    ...mapMutations([
      'createArticle',
    ]),
    createArticle () {
      const newArticle = this.newArticle

      if (!newArticle.content || !newArticle.title) return

      this.$store.commit('createArticle', { ...newArticle, date: moment() })
      this.$router.push('/')
    },
    uploadImage (e) {
      const files = e.target.files
      let reader = new FileReader()

      if(!files[0]) return

      reader.onload = (e) => {
        this.newArticle.imageSrc = e.target.result
      }
      reader.readAsDataURL(files[0])
    },
  }
}
</script>

<style>
.file-input {
  margin: 10px 0;
}
</style>
