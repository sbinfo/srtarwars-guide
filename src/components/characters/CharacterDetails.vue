<template>
  <div class="details-block">
    <div class="row">
      <div class="col-sm">
        <h2>{{ 1 }}</h2>
        <!-- <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" class="image" alt="Luke Skywalker"> -->
      </div>
      <!-- <div class="col-sm">
        <div class="details">
          <h4>Luke Skywalker</h4>
          <p><b>Birth Year:</b> 19BBY</p>
          <p><b>Height:</b> 172cm</p>
          <p><b>Mass:</b> 77kg</p>
          <p><b>Gender:</b> Male</p>
          <p><b>Hair Color:</b> Blond</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["details"],
  data() {
    return {
      test: "lol",
    };
  },
  watch: {
    details: function (newVal, oldVal) {
      console.log(newVal)
      return newVal;
    },
  },
};
</script>

<style scoped>
</style>