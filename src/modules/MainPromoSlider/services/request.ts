import { ajax } from '@common/utils';

import { API_BANNERS_URL } from '../constants';
import { BannersResponseType } from '../types';

export const getPromoSliderDataRequest = async () => {
  try {
    const { data } = await ajax.request<BannersResponseType>('GET', '', {
      params: { route: API_BANNERS_URL },
    });

    return data;
  } catch (e) {
    console.log(e);
    // @ts-ignore
    // eslint-disable-next-line no-throw-literal
    throw e?.response?.data as T;
  }
};
