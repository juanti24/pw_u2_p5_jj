<template>
  <PokemonPage />
</template>
<script>
import Imagen from "./components/Imagen.vue";
import PokemonPage from "./pages/PokemonPage.vue";
export default {
  name: "App",
  components: {
    PokemonPage,
    Imagen,
  },
  
};
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.container {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  justify-content: center;
  text-align: center;
}
h1 {
  grid-column: span 4;
}
h2 {
  grid-column: span 2;
}
button {
  grid-column: span 4;
}
.juego {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 250px);
}
img,
label {
  grid-column: span 1;
}
</style>