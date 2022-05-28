import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-7bfe5.cloudfunctions.net/api',
});

export default instance;
