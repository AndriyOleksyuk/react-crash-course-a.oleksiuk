import React, {useRef, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {cancelRequest, fetchUserData} from '../actions/actions';

const RequestActions = (props) => {
    const cancelBtn = useRef(null);
    const {requestHandler, btnSize, btnOutline, requestIsSended, cancelHandler, source} = props;

    useEffect(() => {
        if(requestIsSended) {
            cancelBtn.current.focus();
        }
    }, [requestIsSended]);

    return (
        <>
            <Button onClick={requestHandler.bind(null, source)} variant={btnOutline + "primary"} size={btnSize} block disabled={requestIsSended}>Get Email</Button>
            <Button onClick={cancelHandler.bind(null, source)} ref={cancelBtn} variant={btnOutline + "danger"} size={btnSize} block disabled={!requestIsSended}>Cancel request</Button>
        </>
    );
}

function mapStateToProps(store) {
    const { btnSize, btnOutline, requestIsSended, source } = store;

    return {
        btnSize,
        btnOutline,
        requestIsSended,
        source
    }
}

const mapDispatchToProps = {
    cancelHandler: cancelRequest,
    requestHandler: fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestActions);
