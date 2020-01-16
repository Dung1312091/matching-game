import React from "react";
import "./style.scss";
const Card = ({ card, onSelect }) => {
  return (
    <div className="card" onClick={() => onSelect(card)}>
      <div
        className={`card__flip ${card.flipped ? "flip" : ""} ${
          card.hide ? "hide" : ""
        }`}
      >
        <div className="card__flip__front">Hello</div>
        <div className="card__flip__back">{card.name}</div>
      </div>
    </div>
  );
};

export default Card;
