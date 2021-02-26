import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Request interceptor (add to request)
axios.interceptors.request.use(request => {
  console.log('Request:', request)
  // Always need to return (pass thru) the request
  return request
}, error => {
  // A way to globally log request errors errors
  console.log(error);
  return Promise.reject(error);
});

// Response Interceptors
axios.interceptors.request.use(response => {
  console.log('Response:', response)
  // Always need to return (pass thru) the response
  return response
}, error => {
  // A way to globally log response errors errors
  console.log(error);
  return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
