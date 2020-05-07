<template>
  <div id="app">
    <mynavbar></mynavbar>
    <br><br><br><br>
    <router-view/>
    <el-backtop visibility-height="0" right="100" bottom="100"></el-backtop>
  </div>
</template>

<script>
import mynavbar from './components/AppComponents/Navbar.vue'

export default {
  name: 'app',
  components: {
    mynavbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
