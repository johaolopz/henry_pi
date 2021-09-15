export const GET_POKEMONS = 'GET_POKEMONS';
export const CLOSE_POKEMONS = 'CLOSE_POKEMONS';

export function getPokemons() {
    // return function(dispatch) {
    //       return fetch("https://pokeapi.co/api/v2/pokemon?limit=8&offset=20")
    //       .then(response => response.json())
    //       .then(json => {
    //           json.results.map((elem,index) => {
    //             fetch(`${elem.url}`)
    //             .then(r => r.json())
    //             .then(json2 => {
    //             json.results[index].img = json2.sprites.other['official-artwork'].front_default;
    //             })
    //           });
    //           return json.results
    //       })
    //       .then(json3 => dispatch({ type: GET_POKEMONS, payload: json3 }));;
    // }

    return function(dispatch) {
            return fetch("https://pokeapi.co/api/v2/pokemon?limit=8&offset=20")
            .then(response => response.json())
            .then(json => {
              json.results.map((elem)=>{
                const arr = elem.url.split('/');
                elem.idImg = arr.splice(-2,1).toString();
              });
              return json
            })
            .then(json2 => {
              dispatch({ type: GET_POKEMONS, payload: json2.results })
            });;
      }

    // return async function(dispatch) {
    //   const autoExec = async function() {
    //       const res1 = await fetch("https://pokeapi.co/api/v2/pokemon?limit=8&offset=20");
    //       const res2 = await res1.json()
    //       return await res2.results.map(async (elem)=>{
    //         const res1_1 = await fetch(`${elem.url}`)
    //         const res2_1 = await res1_1.json()
    //         elem.img = await res2_1.sprites.other['official-artwork'].front_default;
    //         console.log('elementos: '+ elem);
    //       });
    //   }
    //   autoExec().then((arr)=>{
    //     console.log(arr);
    //     dispatch({ type: GET_POKEMONS, payload: arr })
    //   });
    // }
}

export function onClose(name) {
  return function(dispatch) {
    return dispatch({ type: CLOSE_POKEMONS, payload: name});
  };
}