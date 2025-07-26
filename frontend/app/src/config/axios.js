import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-api-url.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default instance;
