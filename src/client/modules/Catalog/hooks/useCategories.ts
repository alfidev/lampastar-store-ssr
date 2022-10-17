import { useQuery } from 'react-query';
import { API_CATEGORIES_URL } from '../constants';
import { getQueryRequest } from '../services/requests';
import { CategoryTypeResponse } from '../types';
import { getCategoriesRecursive, mapCategories } from '@modules/Catalog/utils';
import { useMemo } from 'react';

type Props = {
  categoryId?: string;
  parentId?: string;
};

export const useCategories = (props?: Props) => {
  const { categoryId, parentId = '0' } = props || {};

  const { isLoading, data } = useQuery([API_CATEGORIES_URL, parentId], getQueryRequest<CategoryTypeResponse[]>(), {
    retry: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,
  });

  const categoriesList = useMemo(() => (data ? mapCategories(data) : []), [data]);

  const categoriesMap = useMemo(() => getCategoriesRecursive(categoriesList, parentId), [data]);

  const category = useMemo(
    () => (categoryId && categoriesList?.find(({ id }) => id === categoryId)) || null,
    [data, categoryId],
  );

  return { isLoading, list: categoriesMap, map: categoriesMap, category };
};
