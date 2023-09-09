/* eslint-disable no-param-reassign */
import axios from 'axios';

import { ENV } from '~constants/ENV';
import { sessionStore } from '~store/session';

const axiosInstance = axios.create({
  baseURL: ENV.API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStore.getState()?.user?.token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

// const UNAUTHORIZED_STATUS = 401;

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error?.response?.status === UNAUTHORIZED_STATUS) {
    //   console.log(error);
    // }
    return Promise.reject(error);
  },
);

export { axiosInstance };
