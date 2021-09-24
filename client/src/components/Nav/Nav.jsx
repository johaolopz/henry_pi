import React from "react";
import {Link} from 'react-router-dom';
import './nav.css';
import SearchBar from "./SearchBar";
import homeIcon from '../../img/home_ico.svg';
import exitIcon from '../../img/exit_ico.svg';
import Logo from '../../img/Pokemon_logo.svg'

function Nav({onSearch}) {
    return (
      <nav className='navContainer'>
          <Link to='/pokemon' className='a_Home' >
            <div className='divLogo'>
              <img id="logoApp" src={Logo} className="d-inline-block align-top" alt="" />
            </div>
            <div className='divLogo'>
              <img id="homeIcon" src={homeIcon} className="d-inline-block align-top" alt="" />
            </div>
          </Link>
          <Link to='/pokemon/create' className='a_Create'>
            <img id="createIcon" src='https://fontmeme.com/permalink/210924/61bff37f40fff01c71f3b8075453602a.png' className="d-inline-block align-top" alt="" />
          </Link>
          <div className='rightDiv'>
            <SearchBar
                onSearch={onSearch}
            />
            <Link className='exitIcon' to='/'>
              <img id="exitIcon" src={exitIcon} className="d-inline-block align-top" alt="" />
            </Link>
          </div>
      </nav>
    );
  };
  
  export default Nav;