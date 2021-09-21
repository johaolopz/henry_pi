export const GET_POKEMONS = 'GET_POKEMONS';
export const CLOSE_POKEMONS = 'CLOSE_POKEMONS';

export function getPokemons() {
    return function(dispatch) {
            return fetch("http://localhost:3001/pokemons")
            .then(response => response.json())
            .then(async json => {
              dispatch({ type: GET_POKEMONS, payload: json })
            })
      }
}

export function onClose(name) {
  return function(dispatch) {
    return dispatch({ type: CLOSE_POKEMONS, payload: name});
  };
}