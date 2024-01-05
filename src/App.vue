<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Contador titulo="Contador1" :valor="10"/>
  <Contador titulo="Contador2" :valor="calcularValor()"/>
  <Contador titulo="Contador2"/>
</template>
<script>

import Contador from './components/Contador.vue'

export default {
  name: 'App',
  components: {
    Contador,
  },
  methods:{
    calcularValor(){
            return 5+5*100;
        },
        
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
