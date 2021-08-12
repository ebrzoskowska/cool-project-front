import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './index.css'
import { LandingPage } from './pages/landing';
import { Shop } from './pages/shop';
import {Account} from './pages/accountDetails'
import { Navbar } from './navbar';

const App = () => {

  const [user, setUser] = useState();

  return (

    <Router>
      <Navbar/>
      {user ? <Redirect to='/shop'/> : <Redirect to='/'/>}
      <Route exact path='/'>
        <LandingPage setUser={setUser}/>
      </Route>
      <Route path='/shop'>
        <Shop/>
      </Route>
      <Route path='/accountDetails'>
        <Account setUser={setUser} user={user}/>
      </Route>
    </Router>
  );
}

export default App;