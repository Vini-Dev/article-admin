import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

import { getToken } from './auth';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

const get = param => trackPromise(api.get(param));

const post = (param, body) => trackPromise(api.post(param, body));

const put = (param, body) => trackPromise(api.put(param, body));

const del = param => trackPromise(api.delete(param));

// Request interceptor
api.interceptors.request.use(async config => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Convert objet to string params
// Ex: { a: 1, b: [1,2] } -> "a=1&b[]=1&b[]=2"
export const queryBuilder = params => {
  const keys = Object.keys(params);

  return `?${keys
    .map(key => {
      if (!Array.isArray(params[key])) {
        return `${key}=${params[key]}`;
      }

      return params[key].map(p => `${key}[]=${p}`).join('&');
    })
    .join('&')}`;
};

export default {
  get,
  post,
  put,
  delete: del,
};
