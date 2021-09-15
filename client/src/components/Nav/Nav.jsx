import React from "react";
import {Link} from 'react-router-dom';
import './nav.css';
import SearchBar from "./SearchBar";

function Nav({onSearch}) {
    return (
      <nav className='navContainer'>
          <Link to='/home' className='a_Home'>
            <div className='divLogo'>
                {/* <img id="logoApp" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" /> */}
                <h3>Home</h3>
            </div>
          </Link>
          <Link to='/create' className='a_Create'>
            <h3 className="about">Create</h3>
          </Link>
          <div className='rightDiv'>
            <SearchBar
                onSearch={onSearch}
            />
            <Link to='/'>
                <h3 className="exitButton">Exit</h3>
            </Link>
          </div>
      </nav>
    );
  };
  
  export default Nav;