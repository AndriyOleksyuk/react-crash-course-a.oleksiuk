import React from 'react';
import { Card, Alert } from 'react-bootstrap';
import {connect} from 'react-redux';

const CardBodyAlert = props => {
    const {text} = props
    return (
        <Card.Body>
            {text &&
                <Alert variant="success">
                    Email: {text}
                </Alert>
            }
        </Card.Body>
    );
}


function mapStateToProps(store) {
    const { serviceData } = store.request;

    return {
        text: serviceData ? serviceData.email : ''
    }
}

export default connect(mapStateToProps)(CardBodyAlert);
