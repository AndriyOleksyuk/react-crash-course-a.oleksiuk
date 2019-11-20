import React from 'react';
import ModalWindow from './containers/ModalWindow';
import MainContainer from './containers/MainContainer';
import Response from './components/Response';
import {connect} from 'react-redux';
import { Alert, Container } from 'react-bootstrap';

const App = props => {

    return (
        <>
            <MainContainer />
            <ModalWindow />
            <Response>
                <Container>
                    <Alert>{props.json}</Alert>
                </Container>
            </Response>
        </>
    );
}

function mapStateToProps(store) {
    const { serviceData } = store.request;

    return {
        json: serviceData ? serviceData.data : []
    }
}

export default connect(mapStateToProps)(App);