<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Contador titulo="Contador1"/>
  <Contador titulo="Contador2"/>
  <Contador titulo="Contador3"/>
</template>
<script>
import Contador from './components/Contador.vue'

export default {
  name: 'App',
  components: {
    Contador
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
