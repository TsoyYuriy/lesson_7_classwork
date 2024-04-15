import React from "react";
import './card.css';

const Card = (props) => {

  const {cardSrc, name, age, type} = props

  return <div className="card">
    <img className="card__img" src={cardSrc} alt="img" />
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Type: {type}</p>
  </div>;
};

export default Card;
