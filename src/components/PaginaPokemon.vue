<template>
  <div class="container">
    <p>Ingrese el id pokemon</p>

    <input
      type="text"
      class="buscar"
      v-on:keyup.enter="consultar"
      v-model="codigo"
      placeholder="Ingrese el id del pokemon"
    />

    <div class="consulta" v-show="consulta">
      <div class="consulta-item">
        <label for="">Name:</label>
        <input
          type="text"
          readonly
          onmousedown="return false;"
          :value="name"
        />
      </div>

      <div class="consulta-item">
        <label for="">Weight</label>
        <input
          type="text"
          readonly
          onmousedown="return false;"
          :value="weight"
        />
      </div>

      <div class="consulta-item">
        <label for="">Base:</label>
        <input
          type="text"
          readonly
          onmousedown="return false;"
          :value="base"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "PaginaPokemon",
  data() {
    return {
      consulta: false,
      codigo: "",
     
        name: "",
        weight: "",
        base: "",
    
    };
  },

  methods: {

    async consultar(){
        const estado = await this.consumirAPI(this.codigo);
        this.datos=estado;
        this.consulta = true;
    },


    async consumirAPI(idPokemon) {
      const {name,weight,base_experience} = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
      ).then((result) => result.json());

  
       this.name=name;
       this.weight=weight;
       this.base=base_experience;
      
      
    },
  },
};
</script>

<style>

.consulta label,
input {
  font-size: large;
  display: block;
  text-align: left;
  border-radius: 5px;
  border: solid 1px black;
}

p{
    color: #dfe6e9;
}

.buscar {
  padding: 10px;
  margin: 30px auto;
}

.consulta {
  background-color: #dfe6e9;
  width: 30vw;
  margin: auto;
  border-radius: 15px;
  padding: 5px 0px;
}

.consulta-item {
  color: black;
  margin: 15px;
}

.consulta label {
  border: 0px;
}

.consulta{
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
}


</style>

