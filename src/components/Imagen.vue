<template>
  <div class="container">
    <img :src="urlImg" alt="No se pudo cargar la imagen">
    <label for="">{{ texto }}</label>
  </div>
</template>

<script>
export default {

    props:{
        texto:{
            type:String
        },
        urlImg:{
            type:String
        }
    }
}
</script>

<style>
.container{
    display: grid;
   justify-content: center;
   align-items: center;
   margin: 0px 37px
}


img{
  width:200px;
  height: 200px;
}

</style>