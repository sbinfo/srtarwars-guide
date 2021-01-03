<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-8">
        <!-- <CharacterDetails :details="personDetails" /> -->
        <router-view></router-view>
      </div>
      <div class="col-12 col-sm-4">
        <div class="list-group">
          <router-link
            v-for="person in characters"
            :key="person.created"
            :to="{
              name: 'character',
              params: {
                personName: person.name.replace(/ /g, '-').toLowerCase(),
              },
            }"
            class="list-group-item list-group-item-action"
          >
            {{ person.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import CharacterDetails from "./CharacterDetails";

export default {
  components: {
    CharacterDetails,
  },
  data() {
    return {
      personDetails: {}
    }
  },
  computed: {
    ...mapActions(["getCharacters"]),
    ...mapState({
      characters: (state) => {
        return state.people;
      },
    })
  },
  mounted() {
    this.getCharacters;
  },
  // watch: {
  //   $route(to, from) {
  //     this.personDetails = from;
  //   }
  // }
};
</script>

<style scoped>
</style>