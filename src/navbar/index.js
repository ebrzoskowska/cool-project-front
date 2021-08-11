import React, { useState } from 'react';
import {Link} from "react-router-dom";


export const Navbar = ({setUser}) => {

  const logOutHandler = (e) =>{
    e.preventDefault();
    localStorage.removeItem('MyToken')
    setUser();
  }
    return (
 <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/"> Mist Shop </Link>
          </li>
          <li>
            <Link to="/accountDetails">Account Details </Link>
          </li>
          <li>
            <button className="btn-logout" onClick={(e) =>logOutHandler(e)}>Logout</button>
          </li>
        </ul>
      </nav>
         );
  
};