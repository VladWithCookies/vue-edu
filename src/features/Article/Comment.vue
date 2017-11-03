<template>
  <div class='comment'>
    <a class='avatar'>
      <img src='https://picsum.photos/200'>
    </a>
    <div class='content'>
      <a class='author'>{{comment.author}}</a>
      <div class='metadata'>
        <span class='date'>{{comment.date}}</span>
      </div>
      <div class='text'>{{comment.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['comment'],
}
</script>
