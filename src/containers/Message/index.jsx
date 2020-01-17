import React, {memo, useContext} from "react";
import {Modal,Button} from "react-bootstrap"
import {AppContext} from "../../contexts/appContext"
import {showModalMessage} from "../../actions"
const Message = memo(() => {
    const {state: {showModal, isWon}, dispatch} = useContext(AppContext)
    const handleClose = () => dispatch(showModalMessage(false));
    return (
      <>
      
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
    <Modal.Title>{isWon ? "Congratulations!!!" : "Oops!!!"}</Modal.Title>
          </Modal.Header>
    <Modal.Body>{isWon ? "Your memory is still useful." : "You just ran out of time. Better luck next time."}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Too hard? Try different level
            </Button>
            <Button variant="primary" onClick={handleClose}>
            Try again
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  })
  export default Message