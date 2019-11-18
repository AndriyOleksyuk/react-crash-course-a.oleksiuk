import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();    

const state = {
    error: '',
    requestIsSended: false,
    serviceData: {},
    btnOutline: '',
    btnSize: 'sm',
    source: source
};
export default state;
