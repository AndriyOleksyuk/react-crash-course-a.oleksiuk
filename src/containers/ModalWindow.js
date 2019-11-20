import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchUserData, cancelRequest} from '../actions/RequestActions';

const ModalWindow = props => {
    const {error, resendHandler, closeModalHandler} = props;
    return (
        <Modal show={!!error} onHide={closeModalHandler}>
            <Modal.Header>
                <Modal.Title>Request failed</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{error}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={resendHandler} variant="secondary">Resend</Button>
            </Modal.Footer>
        </Modal>
    );
}


function mapStateToProps(store) {
    const { error } = store.request;
    return {
        error: error
    }
}

const mapDispatchToProps = {
    closeModalHandler: cancelRequest,
    resendHandler: fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
