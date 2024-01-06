<template>
  <div>
    <Pregunta />
  </div>
</template>

<script>
import Pregunta from "./components/Pregunta.vue";

export default {
  name: "App",
  components: {
    Pregunta,
  },
  methods: {
    calcularValor() {
      return 5 + 5 * 10;
    },
  },
};
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