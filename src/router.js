import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleList from 'features/ArticleList/ArticleList'
import ArticleForm from 'features/ArticleEditor/ArticleForm'
import Article from 'features/Article/Article'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: ArticleList
    },
    {
      path: '/editor',
      component: ArticleForm
    },
    {
      path: '/articles/:id',
      name: 'articles',
      component: Article
    }
  ]
})
