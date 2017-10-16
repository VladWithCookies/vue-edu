<template>
  <div class='mb-60'>
    <div class='ui form'>
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
  }
</script>
