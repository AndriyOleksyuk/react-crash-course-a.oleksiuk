import types from '../actions/Types';

export const RequestReducer = (state = {error: '', requestIsSended: false, serviceData: null, source: null}, action) => {
    switch (action.type) {
        case types.START_FETCH_DATA:
            return {
                ...state,
                requestIsSended: true,
                error: ''
            }
        case types.FINISH_FETCH_DATA:
            return {
                ...state,
                serviceData: action.response,
                requestIsSended: false
            }
        case types.HANDLE_ERROR:
            return {
                ...state,
                requestIsSended: false,
                error: action.error
            }
        case types.SET_CANCEL_TOKEN:
            return {
                ...state,
                source: action.source
            }
        default:
            return state;
    }
}