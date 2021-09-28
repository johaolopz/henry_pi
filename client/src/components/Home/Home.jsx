import React, { useState, useCallback, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import './home.css';
import bg_Home from '../../img/bg_Home.png';
import Nav from "../Nav/Nav.jsx";
import PokeBoard from "../PokeBoard/PokeBoard.jsx";
import Pokemon from '../Pokemon/Pokemon.jsx';
import CreatePokemon from '../CreateForm/CreatePokemon';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getPokemons} from "../../redux/actions";

function Home() {
    document.body.style = `background-image: url("${bg_Home}");`;
    const dispatch = useDispatch();
    const [pokemons, setpokemons] = useState([]);
    const pokemons2 = useSelector(state => state.pokemons);
    //### PAGINATION ###
    const [page, setPage] = useState(0);
    const total = useSelector(state => state.total);
    const [pokeInPage, setPokeInPage] = useState([]);

    useEffect( () => {
      dispatch(getPokemons());}
    ,[]);

    const lastPage = (arg) => {
      let nextPage;
      if(arg===true) nextPage = 0;
      else{
      nextPage = Math.max(page - 1, 0);
      }
      setPage(nextPage);
      let arrPoke = [];
      if(nextPage !== 0) {
        let index = 12*(nextPage-1)+8;
        for (let i=0; i<12; i++) {
          index++;
          arrPoke.push(pokemons2[index])
        }
      }
      setPokeInPage(arrPoke)
    };
  
    const nextPage = () => {
      const nextPage = Math.min(page + 1, total - 1);
      setPage(nextPage);
      let arrPoke = [];
      let index = 12*(nextPage-1)+8;
      for (let i=0; i<12; i++) {
        index++;
        arrPoke.push(pokemons2[index])
        if (!pokemons2[index+1]) break
      }
      setPokeInPage(arrPoke)
    };

    const onSearch = useCallback((namePokemon) => {
        //Llamado a la API local
        fetch(`http://localhost:3001/pokemons?name=${namePokemon}`)
          .then(r => r.json())
          .then((recurso) => {
            if(recurso.name !== undefined){
              const pokemon = {
                id: recurso.id,
                img: recurso.img,
                name: recurso.name,
                typesPokemon: recurso.typesPokemon
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
                  setpokemons([pokemon]);
                })
            }
            else {
              alert(recurso.message);
            }});
      },[])

    const onCloseLocal = useCallback(() => {
      setpokemons([]);
    },[])

    function onFilterLocal(pokeId) {
      let pokemon = pokemons.filter(c => c.id.toString() === pokeId.toString());
      if(pokemon.length === 0) {
        pokemon = pokemons2.filter(c => c.id.toString() === pokeId.toString())
      }
      return pokemon[0];
    }

    // function onFilterBy(type) {
    //   let pokemon = pokemons2.filter(c => c.typesPokemon.includes(type));
    //   setpokemons(pokemon);
    // }

    return (
        <div className='divHome'>
          <Route
            path='/pokemon'
            render={() => <Nav onSearch={(el) => onSearch(el)} />}
          />
          <Route
            exact
            path='/pokemon'
            render={() => (pokemons[0] === undefined) ? (<Pagination
              page={page + 1}
              totalPages={total}
              onLeftClick={lastPage}
              onRightClick={nextPage}
              setPage={setPage}
            />) : ('')}
          />
          <Route
            exact
            path='/pokemon'
            render={() => <PokeBoard pokemons={
              (pokemons[0] !== undefined) ? pokemons :
              pokeInPage} onCloseLocal={(pokemons[0] !== undefined)
                ? onCloseLocal
                : false} />}
          />
          <Route
          exact
          path='/pokemon/create'
          render={() => <CreatePokemon />}
          />
          <Route
          exact
          path='/pokemon/id/:pokeId'
          render={({match}) => <Pokemon
                pokemon={onFilterLocal(match.params.pokeId)}/>}
          />
        </div>
    );
}

export default Home;