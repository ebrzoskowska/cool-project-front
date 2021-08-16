import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './index.css'
import { LandingPage } from './pages/landing';
import { Shop } from './pages/shop';
import { Account } from './pages/accountDetails'
import { Navbar } from './pages/navbar';
import { authUser } from './utils';
import { GamePages } from './pages/individualGames/GamePages';
import { Cart } from './pages/Basket'
// import logo from './components/mist-logo.png';

const App = () => {

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState("Loading");
  const [items,setItems] = useState([])
  const [prices, setPrices] = useState('')

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
        <Shop loading={loading} setLoading={setLoading} game={game} setGame={setGame} items={items} setItems={setItems} prices={prices} setPrices={setPrices}/>
      </Route>
      <Route path='/accountDetails'>
        <Account user={user}/>
      </Route>
      <Route path='/basket'>
        <Navbar setUser={setUser} />
        <Cart items={items} setItems={setItems} prices={prices} setPrices={setPrices}/>
           </Route>
      <GamePages setUser={setUser}/>
    </Router>
  );
}

export default App;