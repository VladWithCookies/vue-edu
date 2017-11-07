export const state = {
  newArticle: {
    title: '',
    author: 'Author Name',
    content: '',
    imageSrc: '',
    comments: [],
  },
  newComment: {
    content: '',
    author: 'Author Name',
  },
  articles:  []
}

export const mutations = {
  createArticle(state, payload) {
    state.newArticle = {
      date: '',
      title: '',
      author: 'Author Name',
      content: '',
      imageSrc: '',
      comments: [],
    }
    state.articles.push(payload)
    console.log(payload)
  },
  createComment(state, { articleId, newComment }) {
    state.newComment = {
      content: '',
      author: 'Art',
    },
    state.articles[articleId].comments.push(newComment) //FIXME: temp slution
  }
}
