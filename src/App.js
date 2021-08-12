import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './index.css'

import { LandingPage } from './pages/landing';
import { Shop } from './pages/shop';

const App = () => {

  const [user, setUser] = useState();

  return (
        <Router>
         {user ? <Redirect to='/shop'/> : <Redirect to='/shop'/>}
      <Route exact path='/'>
        <LandingPage setUser={setUser}/>
      </Route>
      <Route path='/shop'>
        <Shop/>
      </Route>
    </Router>
  );
}

export default App;