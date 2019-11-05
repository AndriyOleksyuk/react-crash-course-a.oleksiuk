import React, { Component } from 'react';
import axios from 'axios';
import ModalWindow from './ModalWindow';
import MainContainer from './MainContainer';

const CancelToken = axios.CancelToken;
const URL = 'https://randomuser.me/api/';

export class App extends Component {
    state = {
        isRequestSended: false,
        error: '',
        data: {}
    }

    source = CancelToken.source();

    getUser = () => {
        var that = this;
        that.setState({
            error: '',
            data: {},
            isRequestSended: true
        });

        axios.get(URL, {
            cancelToken: that.source.token
        })
            .then(res => res.data)
            .then(function (data) {
                var userInfo = data.results[0];
                that.setState({
                    data: {
                        email: userInfo.email
                    }
                })
            }).catch(function (thrown) {
                if (axios.isCancel(thrown)) {
                    that.setState({
                        data: {}
                    })
                } else {
                    that.setState({
                        error: thrown.message
                    })
                }
            }).finally(function () {
                that.setState({
                    isRequestSended: false
                })
                that.source = CancelToken.source();
            });
    }

    canceleRequest = () => {
        if (this.state.isRequestSended) {
            this.source.cancel('Operation canceled by the user.');
        } else {
            this.setState({
                isRequestSended: false,
                error: '',
                data: {}
            });
        }
    }

    render() {
        const { isRequestSended, data, error } = this.state;
        return (
            <>
                <MainContainer
                    text={data.email}
                    cancelHandler={this.canceleRequest}
                    requestHandler={this.getUser}
                    isRequestSended={isRequestSended} />
                <ModalWindow
                    text={error}
                    closeModalHandler={this.canceleRequest}
                    resendHandler={this.getUser} />
            </>
        );
    }
}

export default App;