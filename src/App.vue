<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { Mixin } from 'semantic-ui-vue2'

export default {
  name: 'app',
  mixins: [Mixin],
}
</script>

<style>
* {
  border-radius: 0 !important;
  word-wrap: break-word;
}
.mb-20 {
  margin-bottom: 20px;
}
.mb-60 {
  margin-bottom: 60px;
}
.ml-10 {
  margin-left: 10px;
}
.mt-60 {
  margin-top: 60px;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
