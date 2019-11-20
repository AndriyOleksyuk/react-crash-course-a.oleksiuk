import React, {useRef, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {cancelRequest, fetchUserData} from '../actions/RequestActions';

const RequestActions = (props) => {
    const cancelBtn = useRef(null);
    const {requestHandler, btnSize, btnOutline, requestIsSended, cancelHandler} = props;

    useEffect(() => {
        if(requestIsSended) {
            cancelBtn.current.focus();
        }
    }, [requestIsSended]);

    return (
        <>
            <Button onClick={requestHandler} variant={btnOutline + "primary"} size={btnSize} block disabled={requestIsSended}>Get Email</Button>
            <Button onClick={cancelHandler} ref={cancelBtn} variant={btnOutline + "danger"} size={btnSize} block disabled={!requestIsSended}>Cancel request</Button>
        </>
    );
}

function mapStateToProps(store) {
    const { requestIsSended } = store.request;
    const { btnSize, btnOutline } = store.theme;

    return {
        btnSize,
        btnOutline,
        requestIsSended
    }
}

const mapDispatchToProps = {
    cancelHandler: cancelRequest,
    requestHandler: fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestActions);
