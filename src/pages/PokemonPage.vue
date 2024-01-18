<template>
  <h1>Adivina el pokemon</h1>
  <PokemonImagen :pokemonID="5" :showPokemon="true"/>
  <PokemonOpciones />
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";
import obtenerPokemonsFachada from '../helpers/pokemonHelper'


export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  mounted(){
    console.log('Se monto el componente')
    this.cargaInicial;
  },

  methods:{
    async cargaInicial(){
    const arregloPokemons = await obtenerPokemonsFachada()
    console.log('desde componete');
    console.log(arregloPokemons);
    }
  }
};
</script>

<style>
</style>