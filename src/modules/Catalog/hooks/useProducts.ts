import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { useBasket } from '../../../common/hooks';
import { getQueryRequest } from '../../../common/utils';
import { API_PRODUCTS_URL } from '../constants';
import { OrderType, ProductsTypeResponse, SortType } from '../types';
import { mapProducts } from '../utils';

type Props = {
  category?: number;
  search?: string;
  tag?: string;
  page?: number;
  count?: number;
  sort?: SortType;
  order?: OrderType;
  filters?: Record<string, any>;
  initialData?: ProductsTypeResponse;
};

export const useProducts = ({
  category,
  page = 1,
  count = 18,
  sort,
  order,
  search,
  tag,
  filters,
  initialData,
}: Props) => {
  const { products } = useBasket();

  const requestOptions = {
    params: {
      ...(!!category && { category_id: category }),
      ...(!!search && { search }),
      ...(!!tag && { tag }),
      ...(!!(filters && Object.keys(filters).length) &&
        Object.keys(filters).reduce((acc, current) => ({ ...acc, [`filter_${current}`]: filters[current] }), {})),
      start: count * (page - 1),
      limit: count,
      sort,
      order,
    },
  };

  const { isLoading, data } = useQuery(
    [
      API_PRODUCTS_URL,
      ...(category ? [`${category}`] : []),
      ...(search ? [search] : []),
      sort as string,
      order as string,
      `${page}${count}`,
      JSON.stringify(filters),
    ],
    getQueryRequest<ProductsTypeResponse>(requestOptions),
    {
      retry: false,
      refetchOnWindowFocus: false,
      retryOnMount: false,
      enabled: !!category || !!search || !!tag,
      initialData,
    },
  );

  const totalPage = Math.ceil((data?.total || 0) / (count || 18));

  const list = useMemo(() => mapProducts(data?.list ?? [], products), [data?.list, products]);

  return { isLoading, list, category, totalPage, breadcrumbs: data?.breadcrumbs || [] };
};
