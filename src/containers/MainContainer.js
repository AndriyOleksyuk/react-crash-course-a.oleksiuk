import React, {Suspense, useState} from 'react';
import { Card, Row, Col, Container, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import CardBody from './CardBody';

import {Size} from '../components/Size';
import Outlined from '../components/Outlined';

const MainContainer = props => {
    const {text, cancelHandler, requestHandler, isRequestSended} = props;
    const [btnSize, setBtnSize] = useState('sm');
    const [btnOutline, setBtnOutline] = useState('');

    const CardBodyAlert = React.lazy(() => import('../components/CardBodyAlert'));

    return (
        <Container>
            <Row className="show-grid" float="center">
                <Col xs={12} xsOffset={6}>
                    <Card>
                        <Card.Header>Featured</Card.Header>
                        <ToggleButtonGroup type="radio" defaultValue={btnSize} name="sizeSwitcher" onChange={setBtnSize}>
                            <ToggleButton variant="secondary" value={'sm'}>Set small buttons by HOC</ToggleButton>
                            <ToggleButton variant="secondary" value={'lg'}>Set big buttons by HOC</ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup type="radio" defaultValue={btnOutline} name="outlinedSwitcher" onChange={setBtnOutline}>
                            <ToggleButton variant="outline-secondary" value={'outline-'}>set outline by hook useContext</ToggleButton>
                            <ToggleButton variant="outline-secondary" value={''}>delete outline by hook useContext</ToggleButton>
                        </ToggleButtonGroup>
                        
                        <Outlined.Provider value={btnOutline}>
                            <Size.Provider value={btnSize}>
                                <CardBody 
                                    text={text} 
                                    cancelHandler={cancelHandler} 
                                    requestHandler={requestHandler} 
                                    isRequestSended={isRequestSended} />
                            </Size.Provider>
                        </Outlined.Provider>

                        <Suspense fallback="">
                            <CardBodyAlert text={text} />
                        </Suspense>

                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default MainContainer;
