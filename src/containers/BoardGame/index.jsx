import React, { useState, useEffect,useContext } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "../../components/Card";
import {AppContext} from "../../contexts/appContext"
import {winGame} from "../../actions"
const BoardGame = () => {
  const {state, dispatch} = useContext(AppContext);
  const {initCards, isPlaying, level} = state;
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
  //reset card when change level
  console.log({initCards})
  useEffect(()=> {
    if(!!initCards.length) {
      setCards(initCards)
    }
  }, [initCards])

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

  //complete 
  useEffect(()=> {
    if(completed.length === level.cardNumber) {
      dispatch(winGame())
    }
  },[completed.length, level ])
  const renderBoardGame = () => <Row>
  {cards.map(card => (
    <Col xs={3} key={card.id}>
      <Card card={card} onSelect={onSelectCard} />
    </Col>
  ))}
</Row>
  return (
    <div className="board-game">
      {isPlaying && renderBoardGame()}
      
    </div>
  );
};

export default BoardGame;
