export const GET_POKEMONS = 'GET_POKEMONS';
export const CLOSE_POKEMONS = 'CLOSE_POKEMONS';

export function getPokemons() {
    return function(dispatch) {
            return fetch("https://pokeapi.co/api/v2/pokemon?limit=8&offset=20")
            .then(response => response.json())
            .then(async json => {
              await Promise.all(json.results.map(async (elem)=>{
                const arr = elem.url.split('/');
                elem.idImg = arr.splice(-2,1).toString();
                const resUrl = await fetch (elem.url);
                const dataUrl = await resUrl.json();
                elem.types = await dataUrl.types.map(elem => elem.type.name);
                elem.id = await dataUrl.id;
              }))
              return json
            })
            .then(json2 => {
              dispatch({ type: GET_POKEMONS, payload: json2.results })
            });;
      }
}

export function onClose(name) {
  return function(dispatch) {
    return dispatch({ type: CLOSE_POKEMONS, payload: name});
  };
}