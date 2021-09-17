import React from 'react';
import './card.css';
import { useDispatch } from 'react-redux';
import { onClose } from "../../redux/actions";
import { Link } from 'react-router-dom';

export default function Card ({name, url, idImg, types, onCloseLocal}) {
  const dispatch = useDispatch();
  let onCloseFinal = () => {};
  if (typeof onCloseLocal !== 'function') {
    onCloseFinal = () => dispatch(onClose(name))
  }
  else {
    onCloseFinal = () => onCloseLocal(name)
  }
  const pokeTypes = types.map(elem => <li>{elem}</li>)

    return (
      <div className="card">
        <Link className='anchorTitle' to={`/home/${idImg}`} >
          <div>
            <img className='pokePhoto' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idImg}.svg`} alt='not found' />
          </div>
        </Link>
        <div id="closeIcon" className="row">
            <button onClick={onCloseFinal} className="buttonX">X</button>
        </div>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
          <div className="divDetail">
            <div className="divLife">
              <p className='typesTitle'>Types: </p>
              <ul className='listTypes'>
                {pokeTypes}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};
