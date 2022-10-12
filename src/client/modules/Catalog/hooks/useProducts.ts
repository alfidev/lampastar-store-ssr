import { useQuery } from 'react-query';
import { API_PRODUCTS_URL } from '../constants';
import { getQueryRequest } from '../services';
import { OrderType, ProductsTypeResponse, SortType } from '../types';
import { useMemo } from 'react';
import { mapProducts } from '../utils';

type Props = {
  category: string;
  page?: number;
  count?: number;
  sort?: SortType;
  order?: OrderType;
};

export const useProducts = ({ category, page = 1, count = 18, sort, order }: Props) => {
  const requestOptions = {
    params: {
      filter_category_id: category,
      start: count * (page - 1),
      limit: count,
      sort,
      order,
    },
  };

  const { isLoading, data } = useQuery(
    [API_PRODUCTS_URL, category, sort as string, order as string, `${page}${count}`],
    getQueryRequest<ProductsTypeResponse>(requestOptions),
    {
      retry: false,
      refetchOnWindowFocus: false,
      retryOnMount: false,
      enabled: !!category,
    },
  );

  const productsList = useMemo(() => (data ? mapProducts(data.list) : []), [data]);

  const totalPage = Math.ceil((data?.total || 0) / (count || 18));

  return { isLoading, list: productsList, category, totalPage };
};
