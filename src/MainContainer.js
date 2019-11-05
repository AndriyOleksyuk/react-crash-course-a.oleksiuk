import React, { Component } from 'react';
import { Button, Card, Alert, Row, Col, Container } from 'react-bootstrap';

export class MainContainer extends Component {
    render() {
        const {text, cancelHandler, requestHandler, isRequestSended} = this.props;
        return (
            <Container>
                <Row className="show-grid" float="center">
                    <Col xs={12} xsOffset={6}>
                        <Card>
                            <Card.Header>Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>First lesson</Card.Title>
                                <Button onClick={requestHandler} variant="primary" size="lg" block disabled={isRequestSended}>Get Email</Button>
                                <Button onClick={cancelHandler} variant="danger" size="lg" block disabled={!isRequestSended}>Cancel request</Button>
                            </Card.Body>
                            <Card.Body>
                                {text &&
                                    <Alert variant="success">
                                        Email: {text}
                                    </Alert>
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MainContainer;
