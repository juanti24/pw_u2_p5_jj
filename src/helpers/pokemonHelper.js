const obtenerIdPokemons = () => {
    const pokemonsArr1 = getRandom(600)
    const pokemonsArr2= getRandom(600)
    const pokemonsArr3= getRandom(600)
    const pokemonsArr4 = getRandom(600)
    const pokemonsArr = [pokemonsArr1,pokemonsArr2,pokemonsArr3,pokemonsArr4] ;
    console.log(pokemonsArr);


const obtenerNombresPokemons = (arreglo) => {
    const nombre1 = consumirAPI(arreglo[0]);
    const nombre2 = consumirAPI(arreglo[1]);
    const nombre3 = consumirAPI(arreglo[2]);
    const nombre4 = consumirAPI(arreglo[3]);
}

function consumirAPI(id){
    return "nombre"
}

    

}

const obtenerIdPokemonFachada = () => {
    obtenerIdPokemons()
}

function getRandom(max) {
    return Math.floor(Math.random() * max) + 1;

}



export default obtenerIdPokemonFachada