import React, {useContext, useRef, useEffect} from 'react';
import { Button} from 'react-bootstrap';
import {withSize} from '../components/Size';
import Outlined from '../components/Outlined'

const RequestActions = (props) => {
    const outlined = useContext(Outlined);
    const cancelBtn = useRef(null);
    const {requestHandler, size, isRequestSended, cancelHandler} = props;

    useEffect(() => {
        if(isRequestSended) {
            cancelBtn.current.focus();
        }
    }, [isRequestSended]);

    return (
        <>
            <Button onClick={requestHandler} variant={outlined + "primary"} size={size} block disabled={isRequestSended}>Get Email</Button>
            <Button onClick={cancelHandler} ref={cancelBtn} variant={outlined + "danger"} size={size} block disabled={!isRequestSended}>Cancel request</Button>
        </>
    );
}

export default withSize(RequestActions);
