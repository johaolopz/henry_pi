import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
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
    const pokeInit = useSelector(state => state.pokeInit);
    //### PAGINATION ###
    const [page, setPage] = useState(0);
    const total = useSelector(state => state.total);
    const [pokeInPage, setPokeInPage] = useState([]);

    const lastPage = () => {
      const nextPage = Math.max(page - 1, 0);
      setPage(nextPage);
      let arrPoke = [];
      let index = nextPage*9 -1;
      for (let i=0; i<9; i++) {
        index++;
        arrPoke.push(pokemons2[index])
      }
      setPokeInPage(arrPoke)
    };
  
    const nextPage = () => {
      const nextPage = Math.min(page + 1, total - 1);
      setPage(nextPage);
      let arrPoke = [];
      let index = nextPage*9 -1;
      for (let i=0; i<9; i++) {
        index++;
        arrPoke.push(pokemons2[index])
        if (!pokemons2[index+1]) break
      }
      setPokeInPage(arrPoke)
    };

    function onSearch(namePokemon) {
        //Llamado a la API local
        fetch(`http://localhost:3001/pokemons?name=${namePokemon}`)
          .then(r => r.json())
          .then(async (recurso) => {
            if(recurso.name !== undefined){
              const pokemon = {
                id: recurso.id,
                img: recurso.img,
                name: recurso.name,
                types: recurso.types
              };
              fetch(`http://localhost:3001/pokemons/${recurso.id}`)
                .then(r => r.json())
                .then(json2 => {
                  pokemon.life = json2.life;
                  pokemon.force = json2.force;
                  pokemon.defense = json2.defense;
                  pokemon.speed = json2.speed;
                  pokemon.height = json2.height;
                  pokemon.weight = json2.weight;
                  setpokemons(oldPokemons => [...oldPokemons, pokemon]);
                })
            }
            else {
              alert(recurso.message);
            }});
      }

    // function onCloseLocal(name) {
    //   setpokemons(oldPokemons => oldPokemons.filter(c => c.name !== name));
    // }

    function onFilterLocal(pokeId) {
      let pokemon = pokemons.filter(c => c.id === parseInt(pokeId));
      if(pokemon.length === 0) {
        pokemon = pokemons2.filter(c => c.id === parseInt(pokeId))
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
            path='/home'
            render={() => <Pagination
              page={page + 1}
              totalPages={total}
              onLeftClick={lastPage}
              onRightClick={nextPage}
            />}
          />
          <Route
            exact
            path='/home'
            render={() => <PokeBoard pokemons={
              (pokemons[0] !== undefined) ? pokemons :
              pokeInPage} /*onCloseLocal={onCloseLocal}*/
            page={page} total={total} />}
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