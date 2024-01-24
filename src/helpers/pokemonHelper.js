const getIdPokemons = () => {
  const pokemons1 = numbersAleatorios(600);
  const pokemons2 = numbersAleatorios(600);
  const pokemons3 = numbersAleatorios(600);
  const pokemons4 = numbersAleatorios(600);
  const pokemonsArr = [pokemons1, pokemons2, pokemons3, pokemons4];
//   console.log(pokemonsArr);
  return pokemonsArr;
};

const getNamesPokemons = async ([p1, p2, p3, p4]) => {
  const nombre1 = await verNombre(p1);
  const nombre2 = await verNombre(p2);
  const nombre3 = await verNombre(p3);
  const nombre4 = await verNombre(p4);

  //creacion de objetos
  const pk1 = {
    id: p1,
    nombre: nombre1,
  }
  const pk2 = {
    id: p2,
    nombre: nombre2,
  }
  const pk3 = {
    id: p3,
    nombre: nombre3,
  }
  const pk4 = {
    id: p4,
    nombre: nombre4,
  }
  const arreglo = [pk1, pk2, pk3, pk4];
//   const arreglo = [nombre1, nombre2, nombre3, nombre4];
 
  console.log(arreglo);
  return arreglo;
};

const getPokemons = async () => {
    const arregloId = getIdPokemons();
    return await getNamesPokemons(arregloId);
}

// async function consumirAPI(id){
//     const getApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(p => p.json());
//     return getApi;
// }

async function verNombre(id) {
  const data = await getAPI(id);
  return data.name;
}

const getAPI = async (id) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json());
  //retonar una data.
};

//si quiero usar un metodo original, debo llamar a una fachada y exportar.
const getPokemonsFachada = async () => {
  return await getPokemons();
};

const numbersAleatorios = function (max) {
  return Math.floor(Math.random() * max) + 1;
};

// console.log(obtenerAleatorio(600));

export default getPokemonsFachada;