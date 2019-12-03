import React from 'react';
import { Card, Alert } from 'react-bootstrap';
import {connect} from 'react-redux';

const CardBodyAlert = props => {
    const {serviceData} = props
    return (
        <Card.Body>
            {serviceData && serviceData.email &&
                <Alert variant="success">
                    Email: {serviceData.email}
                </Alert>
            }
        </Card.Body>
    );
}


function mapStateToProps(store) {
    return {
        serviceData: store.request.serviceData
    }
}

export default connect(mapStateToProps)(CardBodyAlert);
