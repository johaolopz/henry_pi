import React from "react";
import './lp_init.css'
import bg_LP_init from '../../img/bg_LP_init.jpg';
import pokemonLogo from '../../img/Pokemon_logo.svg';
import { Link } from 'react-router-dom';

function LandingPage() {
  document.body.style = `background-image: url("${bg_LP_init}");`;
  return (
    <div className="divLP">
      <div id='wordsContainer'>
        <div className='grid1'></div>
        <div className='grid2'>
          <Link to='/pokemon'>
            <img id='wordsPokemon' src={pokemonLogo} alt='not found' />
          </Link>
        </div>
        <div className='grid3'></div>
      </div>
    </div>
  );
}

export default LandingPage;