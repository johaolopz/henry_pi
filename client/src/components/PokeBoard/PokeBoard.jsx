import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './pokeBoard.css';
import Cards from '../Cards/Cards';
import { getPokemons } from "../../redux/actions";

function PokeBoard({pokemons}) {
    const dispatch = useDispatch();
    const pokemons2 = useSelector(state => state.pokemons);
    useEffect( () => {
        dispatch(getPokemons())
    },[])
    if (pokemons[0] !== undefined){
        pokemons.map(elem => {
            elem.url = elem.img;
            const arr = elem.img.split('/').splice(-1,1).toString();
            elem.idImg = arr.split('.').splice(-2,1);
            console.log(elem.idImg)
        })
    }

    return (
        <div className='divPokeBoard'>
            <div className='cardsArea'>
                <Cards pokemons={pokemons[0] !== undefined ? pokemons : pokemons2} />
            </div>
        </div>
    );
}

export default PokeBoard;