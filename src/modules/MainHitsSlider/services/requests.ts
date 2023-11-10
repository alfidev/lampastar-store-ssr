import { ajax } from '@common/utils';
import { API_PRODUCTS_HITS_URL } from '@modules/Catalog/constants';
import { ProductsTypeResponse } from '@modules/Catalog/types';

export const getMainHitsSliderDataRequest = async () => {
  try {
    const { data } = await ajax.request<ProductsTypeResponse>('GET', '', {
      params: { route: API_PRODUCTS_HITS_URL },
    });

    return data;
  } catch (e) {
    console.log(e);
    // @ts-ignore
    // eslint-disable-next-line no-throw-literal
    throw e?.response?.data as T;
  }
};
