import React from 'react';

const GamePage = ({game}) => {
    return(<div>
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

    </div>)
}

export {GamePage}