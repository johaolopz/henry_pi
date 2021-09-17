import React from "react";
import { Link } from "react-router-dom";
import './pokemon.css';

export default function Pokemon({pokemon}) {
    const pokeTypes = pokemon.types.map(elem => <li>{elem}</li>)
    return (
        <div className="pokemon">
                <div className="container">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.idImg}.svg`} alt='not found' />
                    <h2>{pokemon.name}</h2>
                    <div className="info">
                        <div>
                            <ul>
                                {pokeTypes}
                            </ul>    
                        </div>
                        {/* <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Amount of clouds: {city.clouds}</div>
                        <div>Latitude: {city.latitud}º</div>
                        <div>Longitude: {city.longitud}º</div> */}
                    </div>
                    <br />
                    <Link to='/home'>
                        <button className='botonHome'>Home</button>
                    </Link>
            </div>
        </div>
    )
}