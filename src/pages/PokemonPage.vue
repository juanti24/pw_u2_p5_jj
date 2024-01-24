<template>
  <div class="container">
    <div v-if="juego">
      <h1 v-if="!pokemonGanador">Espere porfavor</h1>
      <div v-else>
        <h1>Adivina el pokemon</h1>
        <PokemonImagen
          :pokemonID="pokemonGanador.id"
          :showPokemon="mostrarPokemon"/>

        <PokemonOpciones
          :pokemons="pokemonArray"
          @selecciono="revisarClick($event)"
        />
      </div>
    </div>
  </div>

  <div class="win" v-if="win">
      <h1>Muy bien acertaste</h1>
      <PokemonImagen
          :pokemonID="pokemonGanador.id"
          :showPokemon="mostrarPokemon"
        />

        <h2> {{nombre}}</h2>
      <button @click="reiniciar">Reiniciar</button>
    </div>

    <div class="lose" v-if="lose">
      <h1>Sigue intentando</h1>
      <button @click="reiniciar">Reiniciar</button>
    </div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";
import getPokemonsFachada from "../helpers/pokemonHelper";
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
    async cargaInicial() {
      const arrayPokemons = await getPokemonsFachada();
      console.log("Usando el componente de arreglos -> " + arrayPokemons);
      this.pokemonArray = arrayPokemons;
      const indiceGanador = Math.floor(Math.random() * 4);
      this.pokemonGanador = this.pokemonArray[indiceGanador];
    },
    reiniciar() {
      this.cargaInicial();
      this.pokemonArray = [];
      this.pokemonGanador = null;
      this.mostrarPokemon = false;
      this.win = false;
      this.lose = false;
      this.juego = true;
    },
    revisarClick(datoRecibido) {
      console.log("Dio click y reporto desde el padre");
      console.log(datoRecibido);
      if (this.pokemonGanador.id === datoRecibido.id) {
        this.mostrarPokemon = true;
        this.win = true;
        this.nombre=this.pokemonGanador.nombre;
        console.log();
      } else {
        this.lose = true;
        
      }
      this.juego = false;
    },
  },
  data() {
    return {
      pokemonArray: [],
      pokemonGanador: null,
      mostrarPokemon: false,
      nombre:"",
      win: false,
      lose: false,
      juego: true,
    };
  },
};
</script>
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.win{
color: green;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.lose{
  color: red;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
button{
  font-size: 20px;
  width: 100px;
  height: 50px;
}

.win,
.lose {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px; /* Ajusta según sea necesario */
}

.win h1,
.lose h1,
.win h2 {
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #59ABE3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #4a8bc2;
}

</style>