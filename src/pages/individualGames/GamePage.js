import React, { useEffect, useState } from 'react';
import {Navbar} from '../navbar'

const GamePage = ({game}) => {
    const [submit, setSubmit] = useState(false)
    const [user, setUser] = useState("Anynymous");
    const [content, setContent] = useState("")
    const [recommend, setRecommend] = useState(false)

    // useEffect(()=>{
    //     setSubmit(false)
    // }, [submit])
    

    const postComment = async (game, user, content, thumbs) => {
        let date = new Date()
        console.log(date)
        let response = await fetch(`${process.env.REACT_APP_REST_API}games`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                gameid: game._id,
                user: user,
                content: content,
                rating: thumbs,
                date: date
            })
        })
        let newGame = response.game;
        console.log(newGame);
    }



    return(<div>
        <Navbar setUser={setUser}/>
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
        <div>
            <form>
                <input placeholder="user" onChange={(e) =>setUser(e.target.value)}/>
                <input placeholder="Your post goes here" onChange={(e) =>setContent(e.target.value)}/>
                {/* <input type="radio" onSelect={()=>{setRecommend(true)}}>Thumbs Up</input>
                <input type="radio" onSelect={()=>{setRecommend(false)}}>Thumbs Down</input> */}
                <button type="submit" onClick={()=>{postComment(game, user, content, recommend)}}>Post</button>
            </form>
        </div>
        </div>
        

    </div>)
}

export {GamePage}