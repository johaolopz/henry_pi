export const GET_POKEMONS = 'GET_POKEMONS';
export const CLOSE_POKEMONS = 'CLOSE_POKEMONS';

export function getPokemons() {
    return function(dispatch) {
            return fetch("http://localhost:3001/pokemons")
            .then(response => response.json())
            .then(json => {
              json.results.map((elem,index) => {
                fetch(`http://localhost:3001/pokemons/${elem.id}`)
                .then(r => r.json())
                .then(json2 => {
                json.results[index].life = json2.life;
                json.results[index].force = json2.force;
                json.results[index].defense = json2.defense;
                json.results[index].speed = json2.speed;
                json.results[index].height = json2.height;
                json.results[index].weight = json2.weight;
                })
              });
              return json
          })
          .then(json3 => dispatch({ type: GET_POKEMONS, payload: json3.results, init: json3.init, total: json3.total}))
}}

// export function onClose(name) {
//   return function(dispatch) {
//     return dispatch({ type: CLOSE_POKEMONS, payload: name});
//   };
// }