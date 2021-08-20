import React, {useState, useEffect} from "react";
import { Route } from "react-router-dom";
import { GamePage } from "./GamePage";
import './GamePageStyles.css'

const GamePages = ({user, setUser}) =>{

const [loading, setLoading] = useState(true);
const [games, setGames] = useState([]);


useEffect( () => {
    getGames(setGames)
}, [loading])

const getGames = async (setGames) => {

    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}games`)
        const data = await response.json()
        await setGames(data.targetGames)
        setLoading(false)

    } catch (error) {
        console.log(error)
    }
}
if (loading) {
    return (<h1 className = "Loading">Loading...</h1>)
  } else {
    return(
        <div>
            <div>
            {games.map((item, index) => {
                return (
                    <Route
                    key={index}
                    path={`/${item._id}`}
                    children={<GamePage game={item} user={user} setUser={setUser} setLoading={setLoading}/>}
                    />
                );
            })}
            </div>
        </div>
        )
    }
}

export {GamePages}