import axios from 'axios'

const API_KEY = '9d38c929'

export default {
  namespaced: true,
  state: () => ({
    title: '',
    movies: [],
    loading: false
  }),
  mutations: {
    updateState (state, payload) {
      Object.keys(payload)
        .forEach(key => {
          state[key] = payload[key]
        })
    },
    pushIntoMovies (state, movies) {
      state.movies.push(...movies)
    }
  },
  actions: {
    async getMovies ({ state, commit, dispatch }) {
      commit('updateState', {
        loading: true
      })

      const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${state.title}&page=1`)
      const { totalResults, Search } = res.data
      const pageLength = Math.ceil(totalResults / 10)

      commit('updateState', {
        movies: Search
      })

      if (pageLength > 1) {
        for (let i = 2; i <= pageLength; i += 1) {
          if (i > 4) {
            break
          }
          await dispatch('getMoviesMore', i)
        }
      }

      commit('updateState', {
        loading: false
      })
    },
    async getMoviesMore ({ state, commit }, pageNum) {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${state.title}&page=${pageNum}`)
      const { Search } = res.data

      commit('pushIntoMovies', Search)
    }
  }
}
