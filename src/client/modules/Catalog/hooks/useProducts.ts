import { useQuery } from 'react-query';
import { API_PRODUCTS_URL } from '../constants';
import { getQueryRequest } from '../services';
import { OrderType, ProductsTypeResponse, SortType } from '../types';
import { useMemo } from 'react';
import { mapProducts } from '../utils';

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

  const productsList = useMemo(() => (data?.list ? mapProducts(data.list) : []), [data]);

  const totalPage = Math.ceil((data?.total || 0) / (count || 18));

  return { isLoading, list: productsList, category, totalPage };
};
