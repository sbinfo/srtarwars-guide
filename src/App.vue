<template>
  <div id="app">
    <Navbar />
    
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: monospace, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;    
  max-width: 900px;
  margin: 0 auto;
}

a {
  color: #009688;
}


</style>
