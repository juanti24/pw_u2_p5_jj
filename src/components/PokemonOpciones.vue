<template>
 
  <h1 v-if="!pokemonGanador"> Espere porfavor</h1>
  <div v-else>
    <h1>Adivina el pokemon</h1>
    <PokemonImagen :pokemonID="pokemonGanador.id" :showPokemon="mostrarPokemon" />
    <PokemonOpciones :pokemons="pokemonArray"   @selecciono="revisarClick"/>
  </div>
   
  </template>
   
  <script>
  import PokemonImagen from "../components/PokemonImagen.vue";
  import PokemonOpciones from "../components/PokemonOpciones.vue";
   
  import getPokemonsFachada from "../helpers/pokemonHelper.js";
   
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
      this.cargaInicial();
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
      async cargaInicial () {
        const arrayPokemons = await getPokemonsFachada();
        console.log("Usando el componente de arreglos -> " + arrayPokemons);
        this.pokemonArray = arrayPokemons;
        const indiceGanador= Math.floor(Math.random()*4);
        this.pokemonGanador= this.pokemonArray[indiceGanador];
      },
   
      revisarClick(){
          console.log("Dio click y reporto desde el padre")
      },
    },
   
    data() {
      return {
        pokemonArray: [],
        pokemonGanador:null,
        mostrarPokemon: false,
   
      };
    },
  };
  </script>
   
  <style>
  </style>