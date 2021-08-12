import React from 'react';
import {Navbar} from '../navbar'

const GamePage = ({game}) => {
    return(<div>
        <Navbar/>
        <div>
        <p>{game.title}</p>
        <p>{game.year}</p>
        <p>{game.genre}</p>
        <p>{game.studio}</p>
        <div>
            {game.comments.map((comment, index)=>{
                return(
                    <div key={index}>
                        <p>{comment.user}</p>
                        <p>{comment.date}</p>
                        <p>{comment.content}</p>
                        <p>{comment.rating}</p>

                    </div>
                )
            })}
        </div>
        </div>
        

    </div>)
}

export {GamePage}