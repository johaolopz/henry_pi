import React from 'react';
import './card.css';
// import { useDispatch } from 'react-redux';
// import { onClose } from "../../redux/actions";
import { Link } from 'react-router-dom';

export default function Card ({name, id, img, typesPokemon, onCloseLocal}) {
  let button = '';
  if (onCloseLocal) {
      button = <div id="closeIcon" className="row">
      <button onClick={onCloseLocal} className="buttonX">X</button>
  </div>;
    }

  const pokeTypes = typesPokemon.map(elem => <li>{elem}</li>)

    return (
      <div className="card">
        <Link className='anchorTitle' to={`/pokemon/id/${id}`} >
          <div>
            <img className='pokePhoto' src={img} alt='not found' />
          </div>
        </Link>
        {button}
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

  // const dispatch = useDispatch();
  // let onCloseFinal = () => {};
  // if (typeof onCloseLocal !== 'function') {
  //   onCloseFinal = () => dispatch(onClose(name))
  // }
  // else {
  //   onCloseFinal = () => onCloseLocal(name)
  // }