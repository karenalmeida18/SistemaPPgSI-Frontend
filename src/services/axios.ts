import axios from 'axios';
import { getToken } from './auth';

const apiConfig = axios.create({
  baseURL: process.env.baseURL,
});

apiConfig.interceptors.request.use(async (config) => {
  const token = getToken();

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default apiConfig;
