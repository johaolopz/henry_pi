import React from 'react';
import './cards.css';
import Card from './Card.jsx';

export default function Cards({pokemons}) {
    let id = 0;
  return (
    <div className='pokeCards'>
      {pokemons.map(c => <Card
          key={id++}
          name={c.name}
          url={c.url}
          idImg={c.idImg}
        /> )}
    </div>
  );
}