import React from 'react';
import { Card } from 'react-bootstrap';
import RequestActions from '../components/RequestActions';

const CardBody = props => {
    const {cancelHandler, requestHandler, isRequestSended} = props;
    return (
        <>
            <Card.Body>                            
            <Card.Title>First lesson</Card.Title>
            <RequestActions 
                cancelHandler={cancelHandler} 
                requestHandler={requestHandler} 
                isRequestSended={isRequestSended} />
            </Card.Body>
            
        </>
    );
}

export default CardBody;
