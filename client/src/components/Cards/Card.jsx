import React from 'react';
import './card.css';
import { useDispatch } from 'react-redux';
import { onClose } from "../../redux/actions";

export default function Card ({name, url, idImg}) {
  const dispatch = useDispatch();

    return (
      <div className="card">
        <div>
          <img className='pokePhoto' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idImg}.svg`} alt='not found' />
        </div>
        <div id="closeIcon" className="row">
            <button onClick={() => dispatch(onClose(name))} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
          <div className="divDetail">
            <div className="divLife">
              <p>Url: </p>
              <p>{url}</p>
            </div>
            <div className="divForce">
              <p>Force</p>
              <p>FORCE</p>
            </div>
          </div>
        </div>
      </div>
    );
};
