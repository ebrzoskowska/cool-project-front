import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './shop.css'

export const Shop = () => {

  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState("Loading");

useEffect( async () => {
  //console.log("UseEffect")
  await getGames(game, setGame)
  if (game.length > 0) {
    setLoading(false)
  }  
},[loading])


const getGames = async (game, setGame) => {

  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}games`)
   // console.log (response)
    const data = await response.json()
    //console.log(data)
    await setGame(data.targetGames)
    //console.log(game)
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
                  <Link className ="info-btn" to={`/${item._id}`}>More Info</Link>
                </button>
                <button className ="btn">Add to Basket</button>
              </div>
            </div>
           )
          })}  
       </div>
      </div>
    )
  }
}

