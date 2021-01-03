<template>
  <div class="details-block">
    <div class="row">
      <div class="col-sm">
        <img :src="getCharacter.imageUrl" class="image" alt="Luke Skywalker">
      </div>
      <div class="col-sm">
        <div class="details">
          <h4>{{ getCharacter.name }}</h4>
          <p><b>Birth Year:</b> {{ getCharacter.birth_year }}</p>
          <p><b>Height:</b> {{ getCharacter.height }}</p>
          <p><b>Mass:</b> {{ getCharacter.mass }}</p>
          <p><b>Gender:</b> {{ getCharacter.gender }}</p>
          <p><b>Hair Color:</b> {{ getCharacter.hair_color }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    getCharacter() {
      const allCharacters = this.$store.state.people;
      const routePersonName = this.$route.params.personName;

      console.log(allCharacters)

      return allCharacters.find((person) => {
        const personName = person.name.replace(/ /g, "-").toLowerCase();
        return personName === routePersonName;
      });
    },
  },
};
</script>

<style scoped>
</style>