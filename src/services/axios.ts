import axios from 'axios';
import { getToken } from './auth';

const apiConfig = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

apiConfig.interceptors.request.use(async (config) => {
  const token = getToken();

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default apiConfig;
