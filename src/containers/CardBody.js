import React from 'react';
import { Card } from 'react-bootstrap';
import RequestActions from '../components/RequestActions';

const CardBody = () => {
    return (
        <>
            <Card.Body>                            
            <Card.Title>Fourth lesson</Card.Title>
            <RequestActions  />
            </Card.Body>
            
        </>
    );
}

export default CardBody;
