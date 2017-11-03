<template>
  <div class='ui fluid card'>
    <div class='content'>
      <div class='author'>
        <div class="right floated meta">{{article.date}}</div>
        <img class='avatar' src='https://picsum.photos/200' />
        <span class='ml-10 meta'>{{article.author}}</span>
      </div>
    </div>
    <router-link :to="{ name: 'articles', params: { id: article.id } }" class='fluid image'>
      <img :src='article.imageSrc' />
    </router-link>
    <div class='content'>
      <router-link :to="{ name: 'articles', params: { id: article.id } }" class='header'>
        {{article.title}}
      </router-link>
      <div class='meta'>{{article.content}}</div>
    </div>
    <div class='extra content'>
      <span class='left floated'>
        <i class='like icon'></i>
        42
      </span>
      <span class='ml-10'>
        <i class='comment icon'></i>
        42
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['article'],
  }
</script>
