import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import store from 'store';

const baseURL = 'https://job.ensemble.com.br/api/';

const http = axios.create({
  baseURL,
});

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const { authToken } = store.getState().auth

    config.headers['ens-api-token'] = 'y50JmeTrhLdG0HDrAfAk';

    if (authToken) {
      config.headers['ens-auth-token'] = authToken;
    }

    return config;
  }
)

http.interceptors.response.use(
  ({ data }: AxiosResponse) => data,
  (error: AxiosError) => {
    console.log(error)
    /* if (error.)
    if (error.response.status / 500 === 1) {
      toast.error('Server temporarily in error.\nPlease try again later.\t:(')
    } */
    return Promise.reject(error);
  }
);

export default http;
