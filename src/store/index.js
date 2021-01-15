import Vue from 'vue';
import Vuex from 'vuex';
import { getData, dataProcessing } from './functions';

Vue.use(Vuex);

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
    /**
     * Get Characters
     * @param commit
     * @returns {Promise<void>}
     */
    async getCharacters({ commit }) {
      const filteredResults = await getData('people', 'characters');
      commit('SET_CHARACTERS', filteredResults);
    },
    /**
     * Get Planets
     * @param commit
     * @returns {Promise<void>}
     */
    async getPlanets({ commit }) {
      const filteredResults = await getData('planets', 'planets');
      commit('SET_PLANETS', filteredResults);
    },

  },
  getters: {}
})