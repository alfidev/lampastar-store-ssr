import { ajax } from '@common/utils';

export const getQueryRequest =
  <T>() =>
  async ({ queryKey }: { queryKey: string[] }): Promise<T> => {
    try {
      const { data } = await ajax.request<T>('GET', queryKey[0]);

      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
