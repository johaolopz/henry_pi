import React, { useState } from "react";
import './home.css';
import bg_Home from '../../img/bg_Home.png';
import Nav from "../Nav/Nav.jsx";
import PokeBoard from "../PokeBoard/PokeBoard.jsx";

function Home() {
    document.body.style = `background-image: url("${bg_Home}");`;
    const [pokemons, setpokemons] = useState([]);

    function onSearch(namePokemon) {
        //Llamado a la pokeapi
        fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
          .then(r => r.json())
          .then((recurso) => {
            if(recurso.name !== undefined){
              const pokemon = {
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

    return (
        <div className='divHome'>
                <Nav onSearch={onSearch} />
                <PokeBoard pokemons={pokemons}/>
        </div>
    );
}

export default Home;