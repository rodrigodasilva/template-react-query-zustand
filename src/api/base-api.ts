/* eslint-disable no-param-reassign */
import axios from 'axios';
import { sessionStore } from '~shared/store/session';

const baseApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

baseApi.interceptors.request.use(
  config => {
    const token = sessionStore.getState()?.user?.token;              
    config.headers.Authorization = `Bearer ${token}`;      
    return  config;
  }
  ,
  error => Promise.reject(error),
);

// const UNAUTHORIZED_STATUS = 401;

baseApi.interceptors.response.use(
  response => response,
  error => {
    console.log(error);
    // if (error?.response?.status === UNAUTHORIZED_STATUS) {
    //   console.log(error);
    // }
    return Promise.reject(error);
  },
);

export { baseApi };
