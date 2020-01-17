import React from "react";
import "./style.scss";
const Card = ({ card, onSelect }) => {
  return (
    <div
      className={`card  ${card.hide ? "hide" : ""}`}
      onClick={() => onSelect(card)}
    >
      <div className={`card__flip ${card.flipped ? "flip" : ""}`}>
        <div className="card__flip__front">Hello</div>
        <div className="card__flip__back">{card.name}</div>
      </div>
    </div>
  );
};

export default Card;
