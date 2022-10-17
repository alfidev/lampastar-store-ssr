import { ajax } from '@common/utils';
import { AxiosRequestConfig } from 'axios';

export const getQueryRequest =
  <T>(options?: AxiosRequestConfig) =>
  async ({ queryKey }: { queryKey: string[] }): Promise<T> => {
    const { params, ...rest } = options || {};
    try {
      const { data } = await ajax.request<T>('GET', '', { params: { route: queryKey[0], ...params }, ...rest });

      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
