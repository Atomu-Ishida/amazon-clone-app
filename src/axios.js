import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5002/clone-7bfe5/us-central1/api',
});

export default instance;
