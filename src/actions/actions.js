import axios from 'axios';
import types from './types';

export const cancelRequest = (source) => (dispatch) => {
    source.cancel('Operation canceled by the user.');

    const CancelToken = axios.CancelToken;
    source = CancelToken.source();
    dispatch(setCancelSource(source));
}

export const fetchUserData = (source) => (dispatch) => {
    const URL = 'https://randomuser.me/api/';
    const cancelToken = source.token;

    dispatch(startFetchUserData());

    axios.get(URL, {cancelToken})
        .then(res => res.data)
        .then(function (data) {
            var userInfo = data.results[0];            
            dispatch(finishFetchUserData({email: userInfo.email, data: JSON.stringify(data, null, 4)}));
        }).catch(function (thrown) {
            if (axios.isCancel(thrown)) {
                dispatch(finishFetchUserData({}));
            } else {
                dispatch(handleError(thrown.message));
            }
        });
};

export const setCancelSource = (source) => ({ type: types.SET_CANCEL_TOKEN, source});
export const startFetchUserData = () => ({ type: types.START_FETCH_DATA});
export const finishFetchUserData = (response) => ({ type: types.FINISH_FETCH_DATA, response});
export const handleError = (error) => ({ type: types.HANDLE_ERROR, error});
export const setBtnSize = (size) => ({type: types.SET_BUTTONS_SIZE, size});
export const setBtnOutline = (outlineValue) => ({type: types.SET_BUTTONS_OUTLINE, outlineValue});