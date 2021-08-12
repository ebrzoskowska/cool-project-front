import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './index.css'
import { LandingPage } from './pages/landing';
import { Shop } from './pages/shop';
import { Account } from './pages/accountDetails'
import { Navbar } from './pages/navbar';
import { authUser } from './utils';
// import logo from './components/mist-logo.png';

const App = () => {

  const [user, setUser] = useState();

  useEffect(() => {
    authUser(setUser)
  }, [user]);

  return (
    <Router>     
      {user ? <Redirect to='/shop'/> : <Redirect to='/'/>}
      <Route exact path='/'>
        <LandingPage setUser={setUser}/>
      </Route>
      <Route path='/shop'>
        <Navbar setUser={setUser} />
        <Shop/>
      </Route>
      <Route path='/accountDetails'>
        <Account setUser={setUser} user={user}/>
      </Route>
    </Router>
  );
}

export default App;