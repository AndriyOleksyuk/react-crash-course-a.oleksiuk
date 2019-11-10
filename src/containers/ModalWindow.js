import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalWindow = props => {
    const {text, resendHandler, closeModalHandler} = props;
    return (
        <Modal show={!!text} onHide={closeModalHandler}>
            <Modal.Header>
                <Modal.Title>Request failed</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{text}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={resendHandler} variant="secondary">Resend</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalWindow;
