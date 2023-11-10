import { useQuery } from '@tanstack/react-query';

import { getQueryRequest } from '../../../common/utils';
import { NEWS_DETAIL_URL } from '../constants';
import { NewsResponseType } from '../types';

type Props = {
  id?: string;
};

export const useNewsItem = ({ id }: Props) => {
  const options = {
    params: { id },
  };

  const { data, isLoading } = useQuery([NEWS_DETAIL_URL, `${id}`], getQueryRequest<NewsResponseType>(options), {
    enabled: !!id,
  });

  return { data: data?.list?.[0], isLoading };
};
