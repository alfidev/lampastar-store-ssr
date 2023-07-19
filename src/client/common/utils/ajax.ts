import axios, { AxiosError, AxiosRequestConfig, Method } from 'axios';

class Ajax {
  public ajax;

  constructor() {
    this.ajax = axios.create({
      baseURL: '/api',
      // timeout: 1000,
    });

    // this.ajax.interceptors.response.use(
    //   (response) => response,
    //   (error) => error as AxiosError<any>
    // );
  }

  request<T, U>(method: Method, url: string, options?: AxiosRequestConfig<U>) {
    try {
      return this.ajax.request<T>({ method, url, ...options });
    } catch (e) {
      // eslint-disable-next-line no-throw-literal
      throw e as AxiosError<T, U>;
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
