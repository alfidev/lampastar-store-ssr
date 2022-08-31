import { useQuery } from 'react-query';
import { API_CATEGORIES_URL } from '../constants';
import { getQueryRequest } from '../services/requests';
import { CategoryTypeResponse } from '../types';
import { getCategoriesRecursive, mapCategories } from '@modules/Catalog/utils';
import { useMemo } from 'react';

export const useCategories = () => {
  const { isLoading, data } = useQuery(API_CATEGORIES_URL, getQueryRequest<CategoryTypeResponse[]>(), {
    retry: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,
  });

  const result = useMemo(() => (data ? getCategoriesRecursive(mapCategories(data)) : data), [data]);

  return { isLoading, list: result };
};
