<template>
  <div class='mb-60'>
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
          style='display:none'
          accept="image/*"
          type='file'
          id='file'
        />
      </div>

      <div class='field'>
        <input v-model='newArticle.title' />
      </div>

      <div class='field'>
        <textarea v-model='newArticle.content' rows='4' />
      </div>

      <button @click='createArticle' class='ui inverted purple button'>
        Submit
      </button>
      <button class='ui secondary button'>Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['newArticle', 'createArticle'],
  methods: {
    uploadImage (e) {
      const files = e.target.files

      if(!files[0]) return

      const data = new FormData()

      data.append('media', files[0])

      const reader = new FileReader()

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
