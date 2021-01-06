import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function dataProcessing(item, count, filter) {
  const personId = item.name.replace(/ /g, '-').toLowerCase();
  const imgUrl = `https://starwars-visualguide.com/assets/img/${filter}/${count++}.jpg`;
  return { id: personId, imageUrl: imgUrl, ...item };
}

export default new Vuex.Store({
  state: {
    people: [],
    planets: [],
    starships: []
  },
  mutations: {
    SET_CHARACTERS(state, people) {
      state.people = people;
    },
    SET_PLANETS(state, planets) {
      state.planets = planets;
    }
  },
  actions: {
    async getCharacters({ commit }) {
      const filteredResults = [];

      let data = null;
      let allResults = [];
      do {
        if (data) {
          data = await fetch(data['next'])
            .then(res => res.json())
            .then(data => data)
        } else {
          data = await fetch('https://swapi.dev/api/people/')
            .then(res => res.json())
            .then(data => data)
        }
        allResults = [...allResults, ...data.results]
      } while (data['next'])

      let count = 1;
      allResults.forEach(item => {
        // dataProcessing добавляет кастомные поля каждому елементу.
        // такие как id и imageUrl
        filteredResults.push(dataProcessing(item, count++, 'characters'));
      })
      commit('SET_CHARACTERS', filteredResults);
    },
    /* planets */
    async getPlanets({ commit }) {
      const filteredResults = [];

      let data = null;
      let allResults = [];
      do {
        if (data) {
          data = await fetch(data['next'])
            .then(res => res.json())
            .then(data => data)
        } else {
          data = await fetch('https://swapi.dev/api/planets/')
            .then(res => res.json())
            .then(data => data)
        }
        allResults = [...allResults, ...data.results]
      } while (data['next'])

      let count = 1;
      allResults.forEach(item => {
        // dataProcessing добавляет кастомные поля каждому елементу.
        // такие как id и imageUrl
        filteredResults.push(dataProcessing(item, count++, 'planets'));
      })
      commit('SET_PLANETS', filteredResults);
    }

  },
  getters: {}
})