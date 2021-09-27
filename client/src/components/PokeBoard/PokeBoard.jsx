import React, { memo } from "react";
import { useSelector } from 'react-redux';
import './pokeBoard.css';
import Cards from '../Cards/Cards';
import pokeBallLoading from '../../img/pokeBallLoading.gif';

const PokeBoard = memo(({pokemons, onCloseLocal}) => {
    const pokeInit = useSelector(state => state.pokeInit);
    const loadPage = useSelector(state => state.loadPage);

    // if (pokemons[0] !== undefined){
    //     pokemons.map(elem => {
    //         elem.url = elem.img;
    //         const arr = elem.img.split('/').splice(-1,1).toString();
    //         elem.idImg = arr.split('.').splice(-2,1);
    //     })
    // }

    return (
        <div className='divPokeBoard'>
            {!loadPage ? (
                <div className='divLoading'>
                    <img className='loadPokemons' src={pokeBallLoading} alt='not forund' />
                    <p className='pLoadPokemons'>Loading...</p>
                </div>) :
            (<div className='cardsArea'>
                <Cards pokemons={pokemons[0] !== undefined ? pokemons : pokeInit}
                onCloseLocal={pokemons[0] !== undefined ? onCloseLocal : false} />
            </div>)}
        </div>
    );
});

export default PokeBoard;