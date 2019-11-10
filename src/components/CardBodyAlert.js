import React from 'react';
import { Card, Alert } from 'react-bootstrap';

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

export default CardBodyAlert;
