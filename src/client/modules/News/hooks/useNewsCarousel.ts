import { useQuery } from 'react-query';
import { NEWS_CAROUSEL_URL } from '../constants';
import { getQueryRequest } from '@common/utils';
import { NewsResponseType } from '../types';

export const useNewsCarousel = () => {
  const options = {
    params: { type: 'p' },
  };

  const { data, isLoading } = useQuery([NEWS_CAROUSEL_URL], getQueryRequest<NewsResponseType>(options));

  return { list: data?.list || [], isLoading };
};
