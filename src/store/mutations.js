export const state = {
  newArticle: {
    id: 3,
    date: '2 days ago',
    title: '',
    author: 'Vlad',
    content: '',
    imageSrc: '',
    comments: [],
  },
  newComment: {
    content: '',
    author: 'Art',
    date: '2 days ago',
  },
  articles:  [
    {
      id: 1,
      date: '2 days ago',
      title: 'Article title',
      author: 'Art',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageSrc: 'https://picsum.photos/1024/568',
      comments: [
        {
          id: 1,
          content: 'Это все пауки!',
          author: 'Arthur',
          date: '2 days ago',
        },
        {
          id: 2,
          content: 'Нрм статья, че',
          author: 'Vlad',
          date: '2 days ago',
        }
      ]
    },
    {
      id: 2,
      date: '2 days ago',
      title: 'Another article title',
      author: 'Vlad',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageSrc: 'https://picsum.photos/1024/569',
      comments: [],
    }
  ]
}

export const mutations = {
  createArticle(state, payload) {
    state.newArticle = {
      id: 3,
      date: '2 days ago',
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
      date: '2 days ago'
    },
    state.articles[articleId].comments.push(newComment) //FIXME: temp slution
  }
}
