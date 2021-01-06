<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-8">
        <router-view></router-view>
      </div>
      <div class="col-12 col-sm-4">
        <div class="list-group">
          <router-link
            v-for="planet in planets"
            :key="planet.created"
            :to="{
              name: 'planet',
              params: {
                planetName: planet.name.replace(/ /g, '-').toLowerCase(),
              },
            }"
            class="list-group-item list-group-item-action"
          >
            {{ planet.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import PlanetDetails from "./PlanetDetails";

export default {
  components: {
    PlanetDetails,
  },
  computed: {
    ...mapActions(["getPlanets"]),
    ...mapState({
      planets: (state) => {
        return state.planets;
      },
    }),
  },
  created() {
    this.getPlanets;
  },
};
</script>

<style scoped>
</style>