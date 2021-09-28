import { GET_POKEMONS, ORDER_ASC_POKEMONS, ORDER_DESC_POKEMONS, ORDER_MAX_FORCE_POKEMONS,
    ORDER_MIN_FORCE_POKEMONS, GET_TYPES, FILTER_CREATED_POKEMONS, FILTER_BY_POKEMONS, FILTER_BY_ALL } from './actions';

const initialState = {
    pokesAll: [],
    pokeInit: [],
    pokemons: [],
    loadPage: false,
    total: 0,
    types: [],
    error: undefined
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokesAll: action.payload,
                pokeInit: action.init,
                pokemons: action.payload,
                loadPage: action.load,
                total: Math.ceil((action.total-9) / 12) + 1,
                error: action.error
            }
        case ORDER_ASC_POKEMONS:
            return {
                ...state,
                pokeInit: action.init,
                pokemons: action.payload,
                loadPage: true,
                total: Math.ceil((action.total-9) / 12) + 1
            }
        case ORDER_DESC_POKEMONS:
        return {
            ...state,
            pokeInit: action.init,
            pokemons: action.payload,
            loadPage: true,
            total: Math.ceil((action.total-9) / 12) + 1
        }
        case ORDER_MAX_FORCE_POKEMONS:
            return {
                ...state,
                pokeInit: action.init,
                pokemons: action.payload,
                loadPage: true,
                total: Math.ceil((action.total-9) / 12) + 1
            }
        case ORDER_MIN_FORCE_POKEMONS:
        return {
            ...state,
            pokeInit: action.init,
            pokemons: action.payload,
            loadPage: true,
            total: Math.ceil((action.total-9) / 12) + 1
        }
        case GET_TYPES:
            return {...state,
                    types: action.payload,
                    error: action.error
            }
        case FILTER_BY_POKEMONS:
            let pokeFilter = state.pokesAll.filter(c => c.typesPokemon.includes(action.payload));
            let pokeInit=[], pokemons=[], total=1;
            if (pokeFilter.length > 0 && pokeFilter.length <=9) {
                pokeInit = pokeFilter;
                pokemons = pokeFilter;
            }
            else if (pokeFilter.length>9){
                pokeInit = pokeFilter.slice(0,9);
                pokemons = pokeFilter;
                total = Math.ceil((pokeFilter.length-9) / 12) + 1
            }
        return {
                ...state,
                pokeInit: pokeInit,
                pokemons: pokemons,
                loadPage: true,
                total: total
        }
        case FILTER_CREATED_POKEMONS:
            let pokeFilter2 = state.pokesAll.filter(c => c.id.length > 4);
            let pokeInit2=[], pokemons2=[], total2=1;
            if (pokeFilter2.length > 0 && pokeFilter2.length <=9) {
                pokeInit2 = pokeFilter2;
                pokemons2 = pokeFilter2;
            }
            else if (pokeFilter2.length>9){
                pokeInit2 = pokeFilter2.slice(0,9);
                pokemons2 = pokeFilter2;
                total2 = Math.ceil((pokeFilter2.length-9) / 12) + 1
            }
        return {
            ...state,
            pokeInit: pokeInit2,
            pokemons: pokemons2,
            loadPage: true,
            total: total2
        }
        case FILTER_BY_ALL:
            let pokeInitAll = state.pokesAll.slice(0,9);
            let totalAll = Math.ceil((state.pokesAll.length-9) / 12) + 1;
        return {
                ...state,
                pokeInit: pokeInitAll,
                pokemons: state.pokesAll,
                loadPage: true,
                total: totalAll
        }
        default:
            return state;
    }
}