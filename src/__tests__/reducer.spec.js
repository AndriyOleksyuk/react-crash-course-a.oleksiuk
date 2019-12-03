
import reducer from '../reducers';
import types from '../actions/Types';
import { finishFetchUserData, startFetchUserData, handleError, setCancelSource } from '../actions/RequestActions';
import axios from 'axios';

describe('reducer', () => {
    const themeState = {
        btnSize: 'lg', 
        btnOutline: 'outline-'
    };

    const requestState = {
        error: '',
        requestIsSended: false,
        serviceData: null,
        source: null
    };

    it('should return the same state theme', () => {
        let state = reducer({}, {type: types.SET_BUTTONS_SIZE, size: 'lg'});
        state = reducer(state, {type: types.SET_BUTTONS_OUTLINE, outlineValue: 'outline-'});

        expect(state.theme).toStrictEqual(themeState);
    })

    it('should return the same state after request start', () => {        
        const state = reducer({}, startFetchUserData());
        expect(state.request).toStrictEqual({...requestState, requestIsSended: true});
    })

    it('should return the same state after request finish', () => {
        const responseData = {data: {email: 'testemail@gmail.com'}};
        const state = reducer({}, finishFetchUserData(responseData));
        expect(state.request).toStrictEqual({...requestState, serviceData: responseData});
    })

    it('should return the same state after request error', () => {        
        const state = reducer({}, handleError('error msg'));
        expect(state.request).toStrictEqual({...requestState, error: 'error msg'});
    })

    it('should return the same state after set cancel source', () => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();    
        const state = reducer({}, setCancelSource(source));
        expect(state.request).toStrictEqual({...requestState, source: source});
    })
})
