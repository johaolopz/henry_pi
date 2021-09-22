import { GET_POKEMONS, CLOSE_POKEMONS } from './actions';

const initialState = {
    pokeInit: [],
    pokemons: [],
    loadPage: false,
    total: 0,
    page: 0
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_POKEMONS:
            return {
                pokeInit: action.init,
                pokemons: action.payload,
                loadPage: true,
                total: Math.ceil(action.total / 9)
            }
        case CLOSE_POKEMONS:
            return {
                pokemons: state.pokemons.filter(c => c.name !== action.payload),
                loadPage: true
            }
        default:
            return state;
    }
}