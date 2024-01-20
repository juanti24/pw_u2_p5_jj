<template>
  <img v-if="img" :src="img" />

  <div class="dark">
    <div class="container">
      <input v-model="pregunta" type="text" />
      <p>Recuerda que debes termina con el signo de interrogación</p>
      <div v-if="preguntaValida">
      <h2>{{ pregunta }}</h2>
      <h2>{{ respuesta }}</h2>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      img: null,
      preguntaValida:false,
    };
  },
  watch: {
    pregunta(value, oldValue) {
      this.preguntaValida=false;
      console.log(value);
      console.log(oldValue);
      if (!value.includes("?")) return;
      //consumo Api
      this.consumirApi();
      this.preguntaValida=true
    },
  },
  methods: {
    async consumirApi() {
      this.respuesta='Procesando.'
      this.respuesta='Procesando..'

      const { answer, image } = await fetch("https://yesno.wtf/api").then(
        (respuesta) => respuesta.json()
      );
      console.log(answer);
      console.log(image);
      
      this.respuesta='Procesando...'
      this.respuesta='Procesando....'
      
      
      this.respuesta = answer==='yes'?'SI!':'NO!';
      this.img = image;

    
    },
  },
};
</script>

<style scoped>
.dark,
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}

.dark {
  background: rgba(0, 0, 0, 0.5);
}

input {
  width: 300px;
  padding: 10px 15px;
  border-radius: 7px;
  border: none;
  font-size: 17px;
  text-align: center;
}

input:focus {
  outline: none;
}

.container {
  position: relative;
  color: aliceblue;
}

p {
  font-size: 12px;
}

h2 {
  margin-top: 150px;
  font-size: 37px;
}
</style>