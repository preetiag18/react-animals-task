import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="cards">
      <img
        src={`https://source.unsplash.com/500x400/?${props.name}`}
        alt={props.name}
      />
      <button className="remove" onClick={props.removeCard}>
        X
      </button>
      <h2>{props.name}</h2>
      {props.likes >= 0 ? <p>❤️ {props.likes}</p> : <p>💔 {props.likes}</p>}
      <div className="buttons">
        <button className="like" onClick={props.addLikes}>
          Add like{" "}
        </button>
        <button className="dislike" onClick={props.addDislikes}>
          Dislike{" "}
        </button>
      </div>
    </div>
  );
};

export default Card;
