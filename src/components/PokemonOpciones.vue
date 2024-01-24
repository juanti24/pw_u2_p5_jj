<template>
  <div class="opciones-container">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selecciono', {id:pokemon.id, apellido: pokemon.nombre})">
        {{ pokemon.nombre }}
      </li>

    </ul>
  </div>
</template>
<script>
export default {
  props: {
    pokemons:{
      type: Array,
      required: true,
    },
  },
};
</script>
<style>
ul {
  list-style-type: none;
}
li {
  background-color: azure;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 250px;
  margin-bottom: 10px;
  cursor: pointer;
}
li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.opciones-container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
ul{
  margin: 0px;
  padding: 0px;
}
</style>