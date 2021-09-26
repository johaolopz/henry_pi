import { GET_POKEMONS, ORDER_ASC_POKEMONS, ORDER_DESC_POKEMONS,
    ORDER_MAX_FORCE_POKEMONS, ORDER_MIN_FORCE_POKEMONS, GET_TYPES } from './actions';

const initialState = {
    pokeInit: [],
    pokemons: [],
    loadPage: false,
    total: 0,
    page: 0,
    types: []
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_POKEMONS:
            return {
                pokeInit: action.init,
                pokemons: action.payload,
                loadPage: true,
                total: Math.ceil((action.total-9) / 12) + 1
            }
        case ORDER_ASC_POKEMONS:
            return {
                pokeInit: action.init,
                pokemons: action.payload,
                loadPage: true,
                total: Math.ceil((action.total-9) / 12) + 1
            }
        case ORDER_DESC_POKEMONS:
        return {
            pokeInit: action.init,
            pokemons: action.payload,
            loadPage: true,
            total: Math.ceil((action.total-9) / 12) + 1
        }
        case ORDER_MAX_FORCE_POKEMONS:
            return {
                pokeInit: action.init,
                pokemons: action.payload,
                loadPage: true,
                total: Math.ceil((action.total-9) / 12) + 1
            }
        case ORDER_MIN_FORCE_POKEMONS:
        return {
            pokeInit: action.init,
            pokemons: action.payload,
            loadPage: true,
            total: Math.ceil((action.total-9) / 12) + 1
        }
        case GET_TYPES:
            return {
                    ...state,
                    types: action.payload
            }
        default:
            return state;
    }
}