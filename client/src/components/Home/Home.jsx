import React, { useState } from "react";
import './home.css';
import bg_Home from '../../img/bg_Home.png';
import Nav from "../Nav/Nav.jsx";
import PokeBoard from "../PokeBoard/PokeBoard.jsx";
import Pokemon from '../Pokemon/Pokemon.jsx';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
    document.body.style = `background-image: url("${bg_Home}");`;
    const [pokemons, setpokemons] = useState([]);
    const pokemons2 = useSelector(state => state.pokemons);

    function onSearch(namePokemon) {
        //Llamado a la pokeapi
        fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
          .then(r => r.json())
          .then((recurso) => {
            if(recurso.name !== undefined){
              const pokemon = {
                id: recurso.id,
                img: recurso.sprites.other['official-artwork'].front_default,
                name: recurso.name,
                types: recurso.types.map(elem => elem.type.name)
              };
              setpokemons(oldPokemons => [...oldPokemons, pokemon]);
        }
      })
      .catch(() => {
        alert("Pokemon no encontrado");
      });
      }

    function onCloseLocal(name) {
      setpokemons(oldPokemons => oldPokemons.filter(c => c.name !== name));
    }

    function onFilterLocal(pokeId) {
      let pokemon = pokemons.filter(c => c.id === parseInt(pokeId));
      if(pokemon.length === 0) {
        pokemon = pokemons2.filter(c => c.id === parseInt(pokeId));
      }
      return pokemon[0];
    }

    return (
        <div className='divHome'>
          <Route
            path='/home'
            render={() => <Nav onSearch={onSearch} />}
          />
          <Route
            exact
            path='/home'
            render={() => <PokeBoard pokemons={pokemons} onCloseLocal={onCloseLocal} />}
          />
          <Route
        exact
        path='/home/:pokeId'
        render={({match}) => <Pokemon
              pokemon={onFilterLocal(match.params.pokeId)}/>}
      />
        </div>
    );
}

export default Home;