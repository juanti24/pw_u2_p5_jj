<template>
  <PaginaPokemon />
</template>

<script>
//import Pregunta from './components/Pregunta.vue'
import PaginaPokemon from './components/PaginaPokemon.vue'
export default {
  name: 'App',
  components: {
    //Pregunta,
    PaginaPokemon
  },
  methods: {
    calcularValor() {
      return 5 + 5 * 10;
    }
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