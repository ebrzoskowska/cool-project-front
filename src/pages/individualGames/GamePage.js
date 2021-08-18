import React, { useState, useEffect } from "react";
import { Navbar } from "../navbar";

const GamePage = ({ game, user, setUser, setLoading }) => {
  const [content, setContent] = useState("");
  const [recommend, setRecommend] = useState(false);


  const postComment = async (e, game, user, content, thumbs) => {
      e.preventDefault()
    const today = new Date();
    const [day, month, year] = [today.getDate(), (today.getMonth() + 1), today.getFullYear()]
    const [minutes, hours] = [today.getMinutes(), today.getHours()]
    let date = `${hours}:${minutes} ${day}/${month}/${year}`
    let response = await fetch(`${process.env.REACT_APP_REST_API}games`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gameid: game._id,
        user: user,
        content: content,
        rating: thumbs,
        date: date,
      }),
    });
    setLoading(true);
  };

  return (
    <div className="gamePage__container">
      <Navbar setUser={setUser} />
      <div className="gamePage__game-details">
        <div className="gamePage__game-title">
          <h1>{game.title}</h1>
        </div>
        <div className="gamePage__game-info">
          <p>studio: {game.studio}</p>
          <p>year: {game.year}</p>
          <p>genre: {game.genre}</p>
        </div>
        <div>
          {game.comments.map((comment, index) => {
            return (
              <div className="gamePage__comment-wrapper" key={index}>
                <div className="gamePage__user-info">
                  <p>posted by: {comment.user}</p>
                  <p>{comment.date}</p>
                </div>
                <p>{comment.content}</p>
                <p>{comment.rating}</p>
              </div>
            );
          })}
        </div>

        <div className="gamePage__form-wrapper">
          <form className="gamePage__form">
            <input
              className="gamePage__input gamePage__input-post"
              placeholder="your post..."
              onChange={(e) => setContent(e.target.value)}
            />
            {/* <input type="radio" onSelect={()=>{setRecommend(true)}}>Thumbs Up</input>
                <input type="radio" onSelect={()=>{setRecommend(false)}}>Thumbs Down</input> */}

            <button
              className="postBtn"
              type="submit"
              onClick={(e) => {
                postComment(e, game, user, content, recommend);
              }}> Post            
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { GamePage };
