import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './shop.css'
import './popup.css'
import {NotificationContainer, NotificationManager} from 'react-notifications';
// import 'react-notifications/lib/notifications.css';

export const Shop = ({loading, setLoading, game, setGame, items, setItems, prices, setPrices, image, setImage}) => {


  const handleItem = (newItem, newPrices, newImage) => {

    let x = newPrices.substring(1)
    setItems([...items, newItem]);
    setPrices([...prices, x]);
    setImage([...image, newImage])
  };

useEffect( () => {
 getGames(game, setGame)
},[loading])


const getGames = async (game, setGame) => {

  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}games`)
    const data = await response.json()
    await setGame(data.targetGames)
    setLoading(false)
  } catch (error) {
    console.log(error)
  }
}

  if (loading) {
    return (<h1 className = "Loading">Loading...</h1>)
  } else {
    return (
      <div>
        <div className ="container">
          {game.map((item,index) => {
          return (
            <div className="gamesItem" key = {index}>
              <h3 className="info, title">{item.title}</h3>
              <img className="info, gamePic" src = {item.image} alt = "Gone walk about"></img>
              <h4 className="info">Genre: {item.genre}</h4>
              <h4 className="info">Studio: {item.studio}</h4>
              <h4 className="info, price">{item.price}</h4>
              <div className ="btn-wrapper">
                <button className ="btn info-btn">
                  <Link className ="info-btn" to={`/${item._id}`}>INFO</Link>
                </button>
                <button className ="btn"  type="button" onClick={() => {

                  handleItem(item.title, item.price, item.image);
                  NotificationManager.info('Added to Cart');
                    }}>BUY</button>
                    <NotificationContainer/>
              </div>
            </div>
           )
          })}  
       </div>
      </div>
    )
  }
}

