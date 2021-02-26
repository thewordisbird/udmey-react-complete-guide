import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-3699b-default-rtdb.firebaseio.com/'
});

export default instance;