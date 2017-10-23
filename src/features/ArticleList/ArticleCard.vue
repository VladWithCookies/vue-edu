<template>
  <div class='mb-60'>
    <div class='ui fluid image'>
      <img :src='article.imageSrc' />
    </div>
    <div class='ui header'>{{article.title}}</div>
    <div>{{article.content}}</div>
  </div>
</template>

<script>
  export default {
    props: ['article'],
  }
</script>
