<template>
  <div class="imagenes-container">
    <img
      :src="imagenFuente"
      alt="No se puede visualizar"
      v-if="showPokemon"
    />

    <img
      :src="imagenFuente"
      alt="No se puede visualizar"
      class="ocultar"
      v-if="!showPokemon"
    />
  </div>
</template>

<script>
export default {
props:{
pokemonID:{
    type: Number,
    requiered: true,
},

showPokemon:{
    type:Boolean,
    requiered:true,
    default:false,
}

},
computed:{

    imagenFuente(){
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonID}.svg`
    
    },
}

};
</script>

<style>
.ocultar {
  filter: brightness(0);
}

img {
  height: 200px;
  position: absolute;
  right: 42%;
}
.imagenes-container {
  height: 200px;
}

</style>