import axios, { AxiosError, AxiosRequestConfig, Method } from 'axios';

class Ajax {
  public ajax;

  constructor() {
    this.ajax = axios.create({
      baseURL: '/api',
      timeout: 1000,
    });

    // this.ajax.interceptors.response.use(
    //   (response) => response,
    //   (error) => error as AxiosError<any>
    // );
  }

  request<T>(method: Method, url: string, options?: AxiosRequestConfig) {
    try {
      return this.ajax.request<T>({ ...options, method, url });
    } catch (e) {
      throw e as AxiosError<any>;
    }
  }
}

export const ajax = new Ajax();

// ajax.interceptors.response.use(
//   (response) => response,
//   (error: Ax) => {
//     console.log(error);
//     return error;
//   }
// );
