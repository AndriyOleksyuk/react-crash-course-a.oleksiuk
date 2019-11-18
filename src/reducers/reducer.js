export const reducer = (state, action) => {
    if (action.type === 'SET_BUTTONS_SIZE') {
        return {
            ...state,
            btnSize: action.size
        }
    } else if (action.type === 'SET_BUTTONS_OUTLINE') {
        return {
            ...state,
            btnOutline: action.outlineValue
        }
    } else if (action.type === 'START_FETCH_DATA') {
        return {
            ...state,
            requestIsSended: true,
            error: ''
        }
    } else if (action.type === 'FINISH_FETCH_DATA') {
        return {
            ...state,
            serviceData: action.response,
            requestIsSended: false
        }
    } else if (action.type === 'HANDLE_ERROR') {
        return {
            ...state,
            requestIsSended: false,
            error: action.error
        }
    } else if (action.type === 'SET_CANCEL_TOKEN') {
        return {
            ...state,
            source: action.source
        }
    }

    return state;
}