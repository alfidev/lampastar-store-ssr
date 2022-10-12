import { useQuery } from 'react-query';
import { API_CATEGORIES_URL } from '../constants';
import { getQueryRequest } from '../services/requests';
import { CategoryTypeResponse } from '../types';
import { getCategoriesRecursive, mapCategories } from '@modules/Catalog/utils';
import { useMemo } from 'react';

export const useCategories = (categoryAlias?: string) => {
  const { isLoading, data } = useQuery(API_CATEGORIES_URL, getQueryRequest<CategoryTypeResponse[]>(), {
    retry: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,
  });

  const categoriesList = useMemo(() => (data ? mapCategories(data) : []), [data]);

  const categoriesMap = useMemo(() => getCategoriesRecursive(categoriesList), [data]);

  const category = useMemo(() => categoriesList?.find(({ id }) => id === categoryAlias) || null, [data, categoryAlias]);

  return { isLoading, list: categoriesMap, map: categoriesMap, category };
};
