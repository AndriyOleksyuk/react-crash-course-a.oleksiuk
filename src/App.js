import React, { useState } from 'react';
import axios from 'axios';
import ModalWindow from './containers/ModalWindow';
import MainContainer from './containers/MainContainer';
import Response from './components/Response';
import { Alert, Container } from 'react-bootstrap';

const URL = 'https://randomuser.me/api/';
const CancelToken = axios.CancelToken;
let source = CancelToken.source();

const App = props => {
    const [responseError, setResponseError] = useState('');
    const [isRequestSended, setIsRequestSended] = useState(false);
    const [serviceData, setServiceData] = useState({});
    
    const getUser = () => {
        setResponseError('');
        setIsRequestSended(true);
        setServiceData({});

        axios.get(URL, {
            cancelToken: source.token
        })
        .then(res => res.data)
        .then(function (data) {
            var userInfo = data.results[0];
            setServiceData({email: userInfo.email, data: JSON.stringify(data, null, 4)});
        }).catch(function (thrown) {
            if (axios.isCancel(thrown)) {
                setServiceData({});
            } else {
                setResponseError(thrown.message);
            }
        }).finally(function () {
            setIsRequestSended(false);
            source = CancelToken.source();
        });
}

    const canceleRequest = () => {
        if (isRequestSended) {
            source.cancel('Operation canceled by the user.');
        } else {
            setResponseError('');
            setIsRequestSended(false);
            setServiceData({});
        }
    }

    return (
        <>
            <MainContainer
                text={serviceData.email}
                cancelHandler={canceleRequest}
                requestHandler={getUser}
                isRequestSended={isRequestSended} />
            <ModalWindow
                text={responseError}
                closeModalHandler={canceleRequest}
                resendHandler={getUser} />
            <Response>
                <Container>
                    <Alert>{serviceData.data}</Alert>                
                </Container>
            </Response>
        </>
    );
}

export default App;