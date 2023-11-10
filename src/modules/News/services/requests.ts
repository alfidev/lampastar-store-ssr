import { ajax } from '@common/utils';

import { NEWS_CAROUSEL_URL } from '../constants';
import { NewsResponseType } from '../types';

export const getNewsCarouselDataRequest = async () => {
  try {
    const { data } = await ajax.request<NewsResponseType>('GET', '', {
      params: { route: NEWS_CAROUSEL_URL, type: 'p' },
    });

    return data;
  } catch (e) {
    console.log(e);
    // @ts-ignore
    // eslint-disable-next-line no-throw-literal
    throw e?.response?.data as T;
  }
};
