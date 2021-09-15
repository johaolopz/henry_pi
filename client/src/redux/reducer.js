import { GET_POKEMONS, CLOSE_POKEMONS } from './actions';

const initialState = {
    pokemons: [],
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_POKEMONS:
            return {
                pokemons: action.payload
            }
        case CLOSE_POKEMONS:
            return {
                pokemons: state.pokemons.filter(c => c.name !== action.payload)
            }
        default:
            return state;
    }
}