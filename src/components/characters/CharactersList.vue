<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-8">
        <CharacterDetails />
      </div>
      <div class="col-12 col-sm-4">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action">R2-D2</a>
          <a href="#" class="list-group-item list-group-item-action active">Luke Skywalker</a>
          <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
          <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CharacterDetails from "./CharacterDetails";

export default {
  components: {
    CharacterDetails,
  },
};
</script>

<style scoped>

</style>