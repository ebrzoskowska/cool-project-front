import React, { useState } from 'react';
import {Link} from "react-router-dom";
// import logo from '../../components/mist-logo.png';

import './navbarStyles.css'

export const Navbar = ({setUser}) => {

  const logOutHandler = (e) =>{
    e.preventDefault();
    localStorage.removeItem('MyToken')
    setUser();
  }

  return (
    <ul className="navMenu">
    {/* <li>
      <img className="navMenuLogo" src={logo} alt="Logo" />
    </li> */}
      <li>
        <Link to="/shop"> Mist Shop </Link>
      </li>
      <li>
        <Link to="/accountDetails">Account Details </Link>
      </li>
      <li>
        <button className="btn-logout" onClick={(e) =>logOutHandler(e)}>Logout</button>
      </li>
    </ul>
  ); 
};
