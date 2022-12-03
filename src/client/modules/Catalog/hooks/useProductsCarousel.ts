import { useQuery } from 'react-query';
import { API_PRODUCTS_CAROUSEL_URL } from '../constants';
import { getQueryRequest } from '@modules/Catalog/services';
import { CarouselType, ProductsTypeResponse } from '../types';
import { useMemo } from 'react';
import { mapProducts } from '../utils';

export const useProductsCarousel = (type: CarouselType) => {
  const { isLoading, data } = useQuery(
    [API_PRODUCTS_CAROUSEL_URL, type],
    getQueryRequest<ProductsTypeResponse>({ params: { type } }),
  );

  const productsList = useMemo(() => (data?.list ? mapProducts(data.list) : []), [data]);

  return { isLoading, list: productsList };
};
