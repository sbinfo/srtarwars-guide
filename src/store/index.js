import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: []
  },
  mutations: {
    SET_CHARACTERS(state, users) {
      state.people = users;
    }
  },
  actions: {
    async getCharacters({ commit }) {
      await fetch('https://swapi.dev/api/people/')
        .then(res => res.json())
        .then(data => {
          commit('SET_CHARACTERS', data.results)
        })
    },
  },
  getters: {}
})