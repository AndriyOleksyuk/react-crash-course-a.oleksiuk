import types from '../actions/Types';

export const ThemeReducer = (state = {btnSize: 'sm', btnOutline: ''}, action) => {
    switch (action.type) {
        case types.SET_BUTTONS_SIZE: 
            return {
                ...state,
                btnSize: action.size
            }
        case types.SET_BUTTONS_OUTLINE:
            return {
                ...state,
                btnOutline: action.outlineValue
            }
        default:
            return state;
    }


}