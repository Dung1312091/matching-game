import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "../../components/Card";

const BoardGame = ({ initCards = [] }) => {
  const [cards, setCards] = useState(initCards);
  const [cardIsCheckeds, setCardIsCheckeds] = useState([]);
  const [completed, setCompleted] = useState([]);

  const onSelectCard = card => {
    if (
      checkersFull(cardIsCheckeds) ||
      cardAlreadyInCheckers(cardIsCheckeds, card)
    )
      return;
    const newCheckers = [...cardIsCheckeds, card];
    setCardIsCheckeds(newCheckers);
    const cardsInCheckersMatched = validateCheckers(newCheckers);
    if (cardsInCheckersMatched) {
      setCompleted([...completed, ...newCheckers]);
    }
    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1200);
    }
    function validateCheckers(checkers) {
      return checkers.length === 2 && checkers[0].name === checkers[1].name;
    }
    function cardAlreadyInCheckers(checkers, card) {
      return (
        (checkers.length === 1 && checkers[0].id === card.id) || card.flipped
      );
    }

    function checkersFull(checkers) {
      return checkers.length === 2;
    }
    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCardIsCheckeds([]);
      }, time);
    }
  };

  useEffect(() => {
    const newCards = cards.map(card => ({
      ...card,
      flipped:
        cardIsCheckeds.findIndex(c => c.id === card.id) !== -1 ||
        completed.findIndex(c => c.id === card.id) !== -1,
      hide: completed.findIndex(c => c.id === card.id) !== -1
    }));
    setCards(newCards);
  }, [cardIsCheckeds, completed]);
  console.log({ cards });

  return (
    <div className="board-game">
      <Row>
        {cards.map(card => (
          <Col xs={3} key={card.id}>
            <Card card={card} onSelect={onSelectCard} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BoardGame;
