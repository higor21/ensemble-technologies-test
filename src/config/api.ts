import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import store from 'store';
import { clear } from 'store/auth/slice';

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
    const { message, code } = error.response?.data?.error || {};
    toast.error(`Error ${code}: ${message}`)

    if(code === 'NOT_AUTHORIZED'){
      store.dispatch(clear())
    }

    return Promise.reject(error);
  }
);

export default http;
