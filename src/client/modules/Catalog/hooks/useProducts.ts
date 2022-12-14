import { useQuery } from 'react-query';
import { API_PRODUCTS_URL } from '../constants';

import { OrderType, ProductsTypeResponse, SortType } from '../types';
import { getQueryRequest } from '@common/utils';

type Props = {
  category?: string;
  search?: string;
  page?: number;
  count?: number;
  sort?: SortType;
  order?: OrderType;
};

export const useProducts = ({ category, page = 1, count = 18, sort, order, search }: Props) => {
  const requestOptions = {
    params: {
      ...(!!category && { filter_category_id: category }),
      ...(!!search && { filter_name: search }),
      start: count * (page - 1),
      limit: count,
      sort,
      order,
    },
  };

  const { isLoading, data } = useQuery(
    [
      API_PRODUCTS_URL,
      ...(category ? [category] : []),
      ...(search ? [search] : []),
      sort as string,
      order as string,
      `${page}${count}`,
    ],
    getQueryRequest<ProductsTypeResponse>(requestOptions),
    {
      retry: false,
      refetchOnWindowFocus: false,
      retryOnMount: false,
      enabled: !!category || !!search,
    },
  );

  const totalPage = Math.ceil((data?.total || 0) / (count || 18));

  return { isLoading, list: data?.list || [], category, totalPage };
};
