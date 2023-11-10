import { ajax } from '@common/utils';

import { API_PRODUCTS_CAROUSEL_URL } from '../constants';
import { CarouselType, ProductsTypeResponse } from '../types';

export const getProductCarouselDataRequest = async (type: CarouselType) => {
  try {
    const { data } = await ajax.request<ProductsTypeResponse>('GET', '', {
      params: { route: API_PRODUCTS_CAROUSEL_URL, type },
    });

    return data;
  } catch (e) {
    console.log(e);
    // @ts-ignore
    // eslint-disable-next-line no-throw-literal
    throw e?.response?.data as T;
  }
};
