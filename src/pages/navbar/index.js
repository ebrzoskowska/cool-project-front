import React from 'react';
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
      <Link to="/shop"> <img className="navMenuLogo" src={logo} alt="Logo" /></Link>      
    </div>
    <div className="navMenuContainer">
      <Link className='navMenuItem' to="/shop"> Shop </Link>
      <Link className='navMenuItem' to="/accountDetails">Account </Link>
      <Link className='navMenuItem' to="/basket"> Cart </Link>
      <button className="btn-logout" onClick={(e) =>logOutHandler(e)}>Logout</button>
    </div>  
    </ul>
  ); 
};
