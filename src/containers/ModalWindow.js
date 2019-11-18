import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchUserData, cancelRequest} from '../actions/actions';

const ModalWindow = props => {
    const {error, resendHandler, closeModalHandler, source} = props;
    return (
        <Modal show={!!error} onHide={closeModalHandler.bind(null, source)}>
            <Modal.Header>
                <Modal.Title>Request failed</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{error}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={resendHandler.bind(null, source)} variant="secondary">Resend</Button>
            </Modal.Footer>
        </Modal>
    );
}


function mapStateToProps(store) {
    const {error, source } = store;

    return {
        error,
        source
    }
}

const mapDispatchToProps = {
    closeModalHandler: cancelRequest,
    resendHandler: fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
