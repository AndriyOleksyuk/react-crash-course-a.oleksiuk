import React from 'react';
import ModalWindow from './containers/ModalWindow';
import MainContainer from './containers/MainContainer';
import Response from './components/Response';
import {connect} from 'react-redux';
import { Alert, Container } from "react-bootstrap";

const App = props => {

    return (;
        <>
            <MainContainer />
            <ModalWindow />
            <Response>
                <Container>
                    <Alert>{props.serviceData && props.serviceData.data}</Alert>
                </Container>
            </Response>
        </>
    );
}

function mapStateToProps(store) {
    return {
        serviceData: store.request.serviceData
    }
}

export default connect(mapStateToProps)(App);