import React from 'react';
import { Card, Alert } from 'react-bootstrap';
import {connect} from 'react-redux';

const CardBodyAlert = props => {
    const {serviceData} = props
    return (
        <Card.Body>
            {serviceData && serviceData.error &&
                <Alert variant="success">
                    Email: {serviceData.error}
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
