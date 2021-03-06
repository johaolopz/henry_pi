export const GET_POKEMONS = 'GET_POKEMONS';
export const ORDER_ASC_POKEMONS = 'ORDER_ASC_POKEMONS';
export const ORDER_DESC_POKEMONS = 'ORDER_DESC_POKEMONS';
export const ORDER_MAX_FORCE_POKEMONS = 'ORDER_MAX_FORCE_POKEMONS';
export const ORDER_MIN_FORCE_POKEMONS = 'ORDER_MIN_FORCE_POKEMONS';
export const GET_TYPES = 'GET_TYPES';
export const FILTER_CREATED_POKEMONS = 'FILTER_CREATED_POKEMONS';
export const FILTER_BY_POKEMONS = 'FILTER_BY_POKEMONS';
export const FILTER_BY_ALL = 'FILTER_BY_ALL';

export function getPokemons() {
    return async function(dispatch) {
            return await fetch("http://localhost:3001/pokemons")
            .then(response => {
              if(!response.ok){
                throw Error('NO SE PUDO CONECTAR A LA API');
              }
              return response.json()})
            .then(async json => {
              await Promise.all(json.results.map(async (elem,index) => {
                await fetch(`http://localhost:3001/pokemons/${elem.id}`)
                .then(r => r.json())
                .then(async json2 => {
                json.results[index].life = await json2.life;
                json.results[index].force = await json2.force;
                json.results[index].defense = await json2.defense;
                json.results[index].speed = await json2.speed;
                json.results[index].height = await json2.height;
                json.results[index].weight = await json2.weight;
                })
              }));
              return json;
          })
          .then(json3 => dispatch({ type: GET_POKEMONS, payload: json3.results, init: json3.init, total: json3.total, load:true, error: undefined}))
          .catch(() => dispatch({ type: GET_POKEMONS, payload: [], init:[], total:[], load: false, error: 'NO SE PUDO CONECTAR A LA API'}))
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


export function getTypes() {
  return async function(dispatch) {
    return await fetch("http://localhost:3001/types")
    .then(response => response.json())
    .then(json => dispatch({ type: GET_TYPES, payload: json.map(elem => elem.name), error: undefined}))
    .catch(() => dispatch({ type: GET_TYPES, payload: [], error: 'NO SE PUDO CONECTAR A LA API'}))
  }
}

export function filterBy(type) {
  return function(dispatch) {
    return dispatch({ type: FILTER_BY_POKEMONS, payload: type});
  };
}

export function filterByCreated() {
  return function(dispatch) {
    return dispatch({ type: FILTER_CREATED_POKEMONS });
  };
}

export function filterByAll() {
  return function(dispatch) {
    return dispatch({ type: FILTER_BY_ALL });
  };
}


// export function onClose(name) {
//   return function(dispatch) {
//     return dispatch({ type: CLOSE_POKEMONS, payload: name});
//   };
// }