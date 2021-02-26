import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.intercptors.request ...

export default instance