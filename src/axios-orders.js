import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactive-burger-39523.firebaseio.com/'
});

export default instance;