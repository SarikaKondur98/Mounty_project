import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trMovies: [],
    ucMovies: []
  },
  mutations: {
    topRatedMoviesMutations(state, payload) {
      state.trMovies = payload
    },
    upComingMoviesMutations(state, payload) {
      state.ucMovies = payload
    }
  },
  actions: {
    getTopRatedMovies({ commit }) {
      axios
        .get("https://api.themoviedb.org/3/movie/top_rated?api_key=06ca252b29d72e8e15c1c1360a37ee4a")
        .then((res) => {
          let movies = [];
          for (let i = 0; i < res.data.results.length; i++) {
            movies[i] = {
              title: res.data.results[i].title,
              votecount: res.data.results[i].vote_count,
              popular: res.data.results[i].popularity,
              releasedate: res.data.results[i].release_date,
              over: res.data.results[i].overview
            }
          }
          console.log(JSON.stringify(movies))
          commit('topRatedMoviesMutations', movies)
        });
    },
    getUpComingMovies({ commit }) {
      axios
        .get("https://api.themoviedb.org/3/movie/upcoming?api_key=06ca252b29d72e8e15c1c1360a37ee4a")
        .then((res) => {
          let films = [];
          for (let i = 0; i < res.data.results.length; i++) {
            films[i] = {
              title: res.data.results[i].title,
              votecount: res.data.results[i].vote_count,
              popular: res.data.results[i].popularity,
              releasedate: res.data.results[i].release_date,
              over: res.data.results[i].overview
            }
          }
          console.log(JSON.stringify(films))
          commit('upComingMoviesMutations', films)
        });
    }
  },
  modules: {
  }
})
