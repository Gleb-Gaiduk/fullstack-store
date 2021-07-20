import axios from 'axios';

export const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

// Add interceptors (kind of middleware for the request)
$authHost.interceptors.request.use(authInterceptor);
