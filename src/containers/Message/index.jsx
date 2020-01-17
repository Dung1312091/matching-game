import React, {memo, useContext} from "react";
import {Modal,Button} from "react-bootstrap"
import {AppContext} from "../../contexts/appContext"
import {showModalMessage, playAgain, playDiffLevel} from "../../actions"
const Message = memo(() => {
    const {state: {showModal, isWon}, dispatch} = useContext(AppContext)
    const handleClose = () => dispatch(showModalMessage(false));
    const handlePlayAgain =  () => {
      dispatch(playAgain())
    }
    const handlePlayDiffLevel = () => {
      dispatch(playDiffLevel())
    }
    return (
      <>
      
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
    <Modal.Title>{isWon ? "Congratulations!!!" : "Oops!!!"}</Modal.Title>
          </Modal.Header>
    <Modal.Body>{isWon ? "Your memory is still useful." : "You just ran out of time. Better luck next time."}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handlePlayDiffLevel}>
            Too hard? Try different level
            </Button>
            <Button variant="primary" onClick={handlePlayAgain}>
            Try again
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  })
  export default Message