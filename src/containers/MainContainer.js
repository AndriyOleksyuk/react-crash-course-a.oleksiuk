import React, {Suspense} from 'react';
import {connect} from 'react-redux';
import { Card, Row, Col, Container, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import CardBody from './CardBody';

import {setBtnSize, setBtnOutline} from '../actions/ThemeActions';

const MainContainer = props => {
    const {btnSize, btnOutline, setBtnOutline, setBtnSize} = props;

    const CardBodyAlert = React.lazy(() => import('../components/CardBodyAlert'));

    return (
        <Container>
            <Row className="show-grid" float="center">
                <Col xs={12} xsOffset={6}>
                    <Card>
                        <Card.Header>Featured</Card.Header>
                        <ToggleButtonGroup type="radio" defaultValue={btnSize} name="sizeSwitcher" onChange={setBtnSize}>
                            <ToggleButton variant="secondary" value={'sm'}>Set small buttons</ToggleButton>
                            <ToggleButton variant="secondary" value={'lg'}>Set big buttons</ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup type="radio" defaultValue={btnOutline} name="outlinedSwitcher" onChange={setBtnOutline}>
                            <ToggleButton variant="outline-secondary" value={'outline-'}>Set outline</ToggleButton>
                            <ToggleButton variant="outline-secondary" value={''}>Delete outline</ToggleButton>
                        </ToggleButtonGroup>
                        
                        <CardBody />

                        <Suspense fallback="">
                            <CardBodyAlert />
                        </Suspense>

                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

function mapStateToProps(store) {
    const { btnSize, btnOutline } = store.theme;

    return {
        btnSize,
        btnOutline
    }
}

const mapDispatchToProps = {
    setBtnSize,
    setBtnOutline
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
