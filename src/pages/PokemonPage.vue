<template>
  <h1 v-if="pokemonGanador==null">Espere por favor estamos cargand el juego......</h1>
  <div v-if="pokemonGanador!==null">
  <h1>Adivina el pokemon</h1>
  <PokemonImagen :pokemonID="pokemonGanador.id" :showPokemon="false" />
  <PokemonOpciones :pokemons="pokemonsArr" />
</div>
</template>
 
<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";
 
import getPokemonsFachada from "../helpers/pokemonHelpers.js";
 
export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
 
  beforeCreate() {
    console.log("Antes de que se cree el componente.");
  },
  created() {
    console.log("Se creo el componente.");
  },
  beforeMount() {
    console.log("Antes de que se mounte el componenten en la pagina.");
  },
  mounted() {
    console.log("se monto el componente pokemon page");
    this.construirLoad();
  },
  beforeUpdate() {
    console.log("Antes de que se actualice el componente.");
  },
  updated() {
    console.log("Basicamente, se actualiza el componente.");
  },
  beforeDestroy() {
    console.log("Antes de que se destruya.");
  },
  destroyed() {
    console.log("destruido");
  },
  methods: {
    async construirLoad() {
      const arrayPokemons = await getPokemonsFachada();
      console.log("Usando el componente de arreglos -> " + arrayPokemons);
      this.pokemonsArr=arrayPokemons;
      const indiceGandor=Math.floor(Math.random()*4);
    this.pokemonGanador=this.pokemonsArr[indiceGandor]
    
    
    },
  },
  

  data(){
    return{
      pokemonsArr:[],
      pokemonGanador:null
    }
  },
};
</script>
 
<style>

</style>