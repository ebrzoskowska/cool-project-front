import React, { useState } from 'react';
import {Link} from "react-router-dom";
import logo from '../../components/mist-logo-black.png';

import './navbarStyles.css'

export const Navbar = ({setUser}) => {

  const logOutHandler = (e) =>{
    e.preventDefault();
    localStorage.removeItem('MyToken')
    setUser();
  }

  return (
    <ul className="navMenu">
    <div className="navMenuLogoContainer">
        <img className="navMenuLogo" src={logo} alt="Logo" />
    </div>
    <div className="navMenuContainer">
      <Link to="/shop"> Mist Shop </Link>
      <Link to="/accountDetails">Account Details </Link>.
      <Link to="/basket"> Basket </Link>
      <button className="btn-logout" onClick={(e) =>logOutHandler(e)}>Logout</button>
    </div>  
    </ul>
  ); 
};
