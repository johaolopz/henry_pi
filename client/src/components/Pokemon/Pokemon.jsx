import React from "react";
import { Link } from "react-router-dom";
import './pokemon.css';

export default function Pokemon({pokemon}) {
    const pokeTypes = pokemon.typesPokemon.map(elem => <li>{elem}</li>)
    return (
        <div className="pokemon">
                <div className="container">
                    <img className='imgPokemon' src={pokemon.img} alt='not found' />
                    <h2>{pokemon.name}</h2>
                    <div>Number: #{pokemon.id}</div>
                    <div className="info">
                        <div className='col1'>
                            <h4 className='typesTitle'>Types: </h4>
                            <ul>
                                {pokeTypes}
                            </ul>
                        </div>
                        <div className='col2'>
                            <h4 className='typesTitle'>Stats: </h4>
                            <ul className='charList'>
                                <li>Life: {pokemon.life}</li>
                                <li>Force: {pokemon.force}</li>
                                <li>Defense: {pokemon.defense}</li>
                                <li>Speed: {pokemon.speed}</li>
                            </ul>
                        </div>
                        <div className='col3'>
                            <h4 className='typesTitle'>Extra Data: </h4>
                            <ul>
                                <li>Height: {pokemon.height}'</li>
                                <li>Weight: {pokemon.weight}Kg</li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <Link to='/pokemon'>
                        <button className='botonHome'>Home</button>
                    </Link>
            </div>
        </div>
    )
}