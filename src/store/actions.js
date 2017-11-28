export default {
  createArticle ({ commit, getters }) {
    commit('createArticle', getters.newArticle)
  },
  createComment ({ commit, getters }) {
    const { newComment, article } = getters
    commit('createComment', { newComment, article })
  },
  resetNewArticle ({ commit }) {
    commit('resetNewArticle')
  }
}
