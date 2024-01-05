<template>
        <h2>{{titulo}}</h2>
        <p>{{ counter }} <sup>2</sup> = {{ obtenerCuadradoComputado}}</p>
        <button @click="incrementarValor()">+1</button>
        <button @click="disminuirValor()">-1</button>
</template>

<script>
export default {
    /*props:["titulo","valor"],*/
    props:{
     titulo:String,
     valor:{
        type:Number,
        required: false, /*Si es necesario*/
        default: 100,
        validator(value){
            if(value>0){
                console.log('error!!!');
            }
            return value>0
        },
      },
    },
    data(){
        return{
           counter:this.valor,
         };
    },  

    methods:{
        obtenerCuadrado(){
            console.log("Se calcula el cuadrado")
            return this.counter * this.counter;
        },
        incrementarValor(){
            
           return  this.counter ++;
        },
        disminuirValor(){
            this.counter--;
            return;
        },
    },
    computed:{
        obtenerCuadradoComputado(){
            console.log("Se calcula el cuadrado computado")
            return this.counter * this.counter;
        },
    },
};
</script>

<style scoped>
button{
    background-color: #64b687;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0px 2px;
    padding: 5px 10px;
}

button:hover{
    background-color: #5aa67b;
}

h2{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #5aa67b

}

p{
    color: black

}

</style>