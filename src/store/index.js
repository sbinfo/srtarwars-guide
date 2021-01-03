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
      const results = [];
      await fetch('https://swapi.dev/api/people/')
        .then(res => res.json())
        .then(data => {
          let count = 1;
          data.results.forEach(item => {
            const personId = item.name.replace(/ /g, '-').toLowerCase();
            const imgUrl = `https://starwars-visualguide.com/assets/img/characters/${ count++ }.jpg`;
            const obj = { id: personId, imageUrl: imgUrl, ...item };
            
            results.push(obj)
          });
          // console.log(results);
          commit('SET_CHARACTERS', results)
        })
    },
  },
  getters: {}
})