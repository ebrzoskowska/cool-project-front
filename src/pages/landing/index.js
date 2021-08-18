import React, { useState } from 'react';
import { fetchUsers } from '../../utils';
import { Redirect } from "react-router-dom";


import './landingStyles.css';
import logo from '../../components/mist-logo-black.png';


export const LandingPage = ({user, setUser}) => {

  const [newUser, setNewUser] = useState(false)
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();

  return (
    <div className='formContainer'>
      <div className='formElement'>

      <div className="formElement__logo-container">
        <img className="formElement__logo" src={logo} alt="Logo" />
        <h2>SIGN UP / LOGIN TO YOUR ACCOUNT</h2>
      </div>
      
      <div className='formElement__wrapper'>
      <form className="formElement__form" onSubmit={(e) => fetchUsers(e, email, username, pass, setUser)}>
        {newUser && <input onChange={(e) =>setEmail(e.target.value)} placeholder='Email' />}
        <input className="formElement__input" onChange={(e) =>setUsername(e.target.value)} placeholder='username' />
        <input className="formElement__input" onChange={(e) =>setPass(e.target.value)} placeholder='password' />
        <button type='submit'>{newUser ? 'Sign Up' : 'Log In'}</button>
      </form>
      <button type='button' onClick={() => setNewUser(!newUser)}>{newUser ? 'Log In' : 'Sign Up'}</button>
      {user && <Redirect to='/shop'/>}
      </div>


      </div>
    </div>
  )
}