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
.cursor-pointer {
  cursor: pointer;
}
</style>
