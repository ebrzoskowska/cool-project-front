import React, {useState, useEffect} from "react";
import { Route } from "react-router-dom";
import { GamePage } from "./GamePage";

const GamePages = () =>{

const [loading, setLoading] = useState(true);
const [games, setGames] = useState("Loading");

useEffect(async () => {
    await getGames(games, setGames)
    if (games.length > 0) {
        setLoading(false)
    }
}, [loading])

const getGames = async (games, setGames) => {

    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}games`)
        const data = await response.json()
        await setGames(data.targetGames)
        console.log(games)
    } catch (error) {
        console.log(error)
    }
}
if (loading) {
    return (<h1 className = "Loading">Loading...</h1>)
  } else {
    return(
        <div>
            <div className="container">
      {games.map((item, index) => {
          return (
            <Route
              key={index}
              path={`/${item._id}`}
              children={<GamePage game={item} />}
            />
          );
        
      })}
    </div>
        </div>

    )
}
}

export {GamePages}