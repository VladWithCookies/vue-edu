import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleList from 'features/ArticleList/ArticleList'
import ArticleEditor from 'features/ArticleEditor/ArticleEditor'
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
      component: ArticleEditor
    },
    {
      path: '/articles/:id',
      name: 'articles',
      component: Article
    }
  ]
})
