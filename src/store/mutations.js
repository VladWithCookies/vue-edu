export const state = {
  newArticle: {
    title: '',
    content: '',
    imageSrc: ''
  },
  articles:  [
    {
      id: 1,
      title: 'Article title',
      content: 'Article content',
      imageSrc: 'https://picsum.photos/1024/568'
    },
    {
      id: 2,
      title: 'Another article title',
      content: 'Another article content',
      imageSrc: 'https://picsum.photos/1024/569'
    }
  ]
}

export const mutations = {
  createArticle(state, article) {
    state.newArticle = {
      title: '',
      content: '',
      imageSrc: ''
    }
    state.articles.push(article)
  }
}
