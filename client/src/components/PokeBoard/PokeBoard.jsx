import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './pokeBoard.css';
import Cards from '../Cards/Cards';
import { getPokemons } from "../../redux/actions";
import pokeBallLoading from '../../img/pokeBallLoading.gif'

function PokeBoard({pokemons, onCloseLocal}) {
    const dispatch = useDispatch();
    const pokeInit = useSelector(state => state.pokeInit);
    const loadPage = useSelector(state => state.loadPage);

    useEffect( () => {
        dispatch(getPokemons());
    },[])

    if (pokemons[0] !== undefined){
        pokemons.map(elem => {
            elem.url = elem.img;
            const arr = elem.img.split('/').splice(-1,1).toString();
            elem.idImg = arr.split('.').splice(-2,1);
        })
    }

    return (
        <div className='divPokeBoard'>
            {!loadPage ? (
                <div>
                    <img className='loadPokemons' src={pokeBallLoading} alt='not forund' />
                    <p className='loadPokemons'>Loading...</p>)
                </div>) :
            (<div className='cardsArea'>
                <Cards pokemons={pokemons[0] !== undefined ? pokemons : pokeInit}
                onCloseLocal={pokemons[0] !== undefined ? onCloseLocal : false}/>
            </div>)}
        </div>
    );
}

export default PokeBoard;