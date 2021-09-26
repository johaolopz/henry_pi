export const GET_POKEMONS = 'GET_POKEMONS';
export const ORDER_ASC_POKEMONS = 'ORDER_ASC_POKEMONS';
export const ORDER_DESC_POKEMONS = 'ORDER_DESC_POKEMONS';
export const ORDER_MAX_FORCE_POKEMONS = 'ORDER_MAX_FORCE_POKEMONS';
export const ORDER_MIN_FORCE_POKEMONS = 'ORDER_MIN_FORCE_POKEMONS';

export function getPokemons() {
    return function(dispatch) {
            return fetch("http://localhost:3001/pokemons")
            .then(response => response.json())
            .then(json => {
              json.results.map(async (elem,index) => {
                await fetch(`http://localhost:3001/pokemons/${elem.id}`)
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


export function orderByAsc(array) {
  const newArr = array.sort((a,b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0
    })
  const newArrInit = newArr.slice(0,9)
  const newTotal = newArr.length;
  return function(dispatch) {
    return dispatch({ type: ORDER_ASC_POKEMONS, payload: newArr, init: newArrInit, total: newTotal });
  };
}


export function orderByDesc(array) {
  const newArr = array.sort((a,b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
        return 1;
    }
    if (nameA > nameB) {
        return -1;
    }
    return 0
    })
  const newArrInit = newArr.slice(0,9)
  const newTotal = newArr.length;
  return function(dispatch) {
    return dispatch({ type: ORDER_DESC_POKEMONS, payload: newArr, init: newArrInit, total: newTotal });
  };
}

export function orderByMinForce(array) {
  const newArr = array.sort((a,b) => {
    const forceA = a.force;
    const forceB = b.force;
    if (forceA < forceB) {
        return -1;
    }
    if (forceA > forceB) {
        return 1;
    }
    return 0
    })
  const newArrInit = newArr.slice(0,9)
  const newTotal = newArr.length;
  return function(dispatch) {
    return dispatch({ type: ORDER_MAX_FORCE_POKEMONS, payload: newArr, init: newArrInit, total: newTotal });
  };
}

export function orderByMaxForce(array) {
  const newArr = array.sort((a,b) => {
    const forceA = a.force;
    const forceB = b.force;
    if (forceA < forceB) {
        return 1;
    }
    if (forceA > forceB) {
        return -1;
    }
    return 0
    })
  const newArrInit = newArr.slice(0,9)
  const newTotal = newArr.length;
  return function(dispatch) {
    return dispatch({ type: ORDER_MIN_FORCE_POKEMONS, payload: newArr, init: newArrInit, total: newTotal });
  };
}

// export function onClose(name) {
//   return function(dispatch) {
//     return dispatch({ type: CLOSE_POKEMONS, payload: name});
//   };
// }