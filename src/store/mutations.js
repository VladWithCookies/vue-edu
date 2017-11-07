export const state = {
  newArticle: {
    id: 3,
    title: '',
    author: 'Vlad',
    content: '',
    imageSrc: '',
    comments: [],
  },
  newComment: {
    content: '',
    author: 'Art',
  },
  articles:  []
}

export const mutations = {
  createArticle(state, payload) {
    state.newArticle = {
      id: 3,
      date: '',
      title: '',
      author: 'Vlad',
      content: '',
      imageSrc: '',
      comments: [],
    }
    state.articles.push(payload)
  },
  createComment(state, { articleId, newComment }) {
    state.newComment = {
      id: 3,
      content: '',
      author: 'Art',
    },
    state.articles[articleId].comments.push(newComment) //FIXME: temp slution
  }
}
