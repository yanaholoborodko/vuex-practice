export default {
  actions: {
    async fetchPosts(context, limit = 3) {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit)
      const posts = await res.json()
      context.commit('updatePosts', posts)
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
  },
  state: {
    posts: []
  },
  getters: {
    allPosts(state) {
      return state.posts
    },
    postsCount(state) {
      return state.posts.length
    }
  },
}