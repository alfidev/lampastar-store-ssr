import { useMemo } from 'react';
import { useQuery } from 'react-query';

import { getQueryRequest } from '@common/utils';
import { getCategoriesRecursive } from '@modules/Catalog/utils';

import { API_CATEGORIES_URL } from '../constants';
import { CategoryType } from '../types';

type Props = {
  categoryId?: number;
  parentId?: number;
};

export const useCategories = (props?: Props) => {
  const { categoryId, parentId = 0 } = props || {};

  const { isLoading, data } = useQuery(
    [API_CATEGORIES_URL, `${parentId}`],
    getQueryRequest<CategoryType[] | undefined>(),
    {
      retry: false,
      refetchOnWindowFocus: false,
      retryOnMount: false,
    },
  );

  const categoriesMap = useMemo(() => getCategoriesRecursive(data ?? [], parentId), [data, parentId]);

  const category = useMemo(() => (categoryId && data?.find(({ id }) => id === categoryId)) || null, [data, categoryId]);

  return { isLoading, list: data, map: categoriesMap, category };
};
