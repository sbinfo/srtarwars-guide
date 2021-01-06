<template>
  <div class="details-block">
    <div class="row">
      <div class="col-sm">
        <img :src="getPlanet.imageUrl" class="image" alt="">
      </div>
      <div class="col-sm">
        <div class="details">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    getPlanet() {
      const allPlanets = this.$store.state.planets;
      const routePlanetName = this.$route.params.planetName;

      return allPlanets.find((planet) => {
        const planetName = planet.name.replace(/ /g, "-").toLowerCase();
        return planetName === routePlanetName;
      });
    },
  },
};
</script>

<style scoped>
</style>