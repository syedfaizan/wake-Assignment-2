import axios from 'axios';

let request = axios.create({
    baseURL: 'http://localhost:4000'
});

export default request