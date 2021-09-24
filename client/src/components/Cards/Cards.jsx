import React from 'react';
import './cards.css';
import Card from './Card.jsx';

export default function Cards({pokemons, onCloseLocal}) {
  return (
    <div className='pokeCards'>
      {pokemons.map(c => <Card
          key={c.id}
          id={c.id}
          name={c.name}
          img={c.img}
          typesPokemon={c.typesPokemon}
          onCloseLocal={onCloseLocal}
        /> )}
    </div>
  );
}