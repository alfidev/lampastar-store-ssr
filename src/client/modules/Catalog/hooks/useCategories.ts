import { useMemo } from 'react';
import { useQuery } from 'react-query';

import { getQueryRequest } from '@common/utils';
import { getCategoriesRecursive } from '@modules/Catalog/utils';

import { API_CATEGORIES_URL } from '../constants';
import { CategoryType } from '../types';

type Props = {
  categoryId?: string;
  parentId?: string;
};

export const useCategories = (props?: Props) => {
  const { categoryId, parentId = '0' } = props || {};

  const { isLoading, data = [] } = useQuery([API_CATEGORIES_URL, parentId], getQueryRequest<CategoryType[]>(), {
    retry: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,
  });

  const categoriesMap = useMemo(() => getCategoriesRecursive(data, parentId), [data, parentId]);

  const category = useMemo(() => (categoryId && data?.find(({ id }) => id === categoryId)) || null, [data, categoryId]);

  return { isLoading, list: categoriesMap, map: categoriesMap, category };
};
