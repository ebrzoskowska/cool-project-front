import React, { useState } from 'react';
import { fetchUsers } from '../../utils';

export const LandingPage = ({setUser}) => {

  const [newUser, setNewUser] = useState(false)
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  // const [age, setAge] = useState();
  // const [paymentInfo, setPaymentInfo] = useState();

  return (
    <div>
      <form onSubmit={(e) => fetchUsers(e, email, username, pass, setUser)}>
        {newUser &&<input onChange={(e) =>setEmail(e.target.value)} placeholder='Email' />}
        <input onChange={(e) =>setUsername(e.target.value)} placeholder='Username' />
        <input onChange={(e) =>setPass(e.target.value)} placeholder='Password' />

{/* I am not sure if this supposed to be here...
        <input onChange={(e) =>setAge(e.target.value)} placeholder='Your Age' />
        <input onChange={(e) =>setPaymentInfo(e.target.value)} placeholder='Your Payment' /> */}

        <button type='submit'>{newUser ? 'Sign Up' : 'Log In'}</button>
      </form>
      <button type='button' onClick={() => setNewUser(!newUser)}>{newUser ? 'Log In' : 'Sign Up'}</button>
    </div>
  )
}