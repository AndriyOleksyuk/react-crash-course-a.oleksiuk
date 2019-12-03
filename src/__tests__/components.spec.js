import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axios from 'axios';
import MainContainer from '../containers/MainContainer';
import ModalWindow from '../containers/ModalWindow';
import RequestActions from '../components/RequestActions';
import {fetchUserData} from '../actions/RequestActions';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers'
import initialState from '../state'

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
);


describe('<MainContainer />', () => {
    it('MainContainer should render and match snapshot', () => {
        const { container } = render(<Provider store={store}><MainContainer /></Provider>);

        expect(container).toMatchSnapshot();
    })
});


describe('<ModalWindow />', () => {
    it('ModalWindow should render and match snapshot', () => {
        const { container } = render(<Provider store={store}><ModalWindow /></Provider>);

        expect(container).toMatchSnapshot();
    })
});



describe('<RequestActions />', () => {
    it('RequestActions should render and match snapshot', () => {
        const { container } = render(<Provider store={store}><RequestActions /></Provider>);

        expect(container).toMatchSnapshot();
    })
});

describe('ModalWindow after success axios call', () => {

    jest.spyOn(axios, 'get').mockImplementationOnce(() => Promise.resolve({
        data: {
            results: [
                {
                    email: 'lucia.vandepavert@example.com'
                }
            ]
        }
    }));

    it('Should match snapshot', async () => {
        const {getByText, container } = render(<Provider store={store}><MainContainer /></Provider>);
        fireEvent.click(getByText('Get Email'));
        expect(axios.get).toHaveBeenCalledTimes(1);
        await Promise.resolve();
        expect(container).toMatchSnapshot();
    })
})

describe('ModalWindow after failed axios call', () => {

    it('Should match snapshot', async () => {
        jest.spyOn(axios, 'get').mockRejectedValue(new Error('Network error'));
        const {container } = render(<Provider store={store}><ModalWindow /></Provider>);

        await store.dispatch(fetchUserData());
        expect(container).toMatchSnapshot();
    })

})

