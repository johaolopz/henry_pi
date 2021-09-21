import { GET_POKEMONS, CLOSE_POKEMONS } from './actions';

const initialState = {
    pokemons: [],
    loadPage: false
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_POKEMONS:
            return {
                pokemons: action.payload,
                loadPage: true
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