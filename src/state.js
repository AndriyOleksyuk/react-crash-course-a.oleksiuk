import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();    

const state = {
    request: {
        error: '',
        requestIsSended: false,
        serviceData: null,
        source: source
    },
    theme: {
        btnSize: 'sm',
        btnOutline: ''
    }
};
export default state;
