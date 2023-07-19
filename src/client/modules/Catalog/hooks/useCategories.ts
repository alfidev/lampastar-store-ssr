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

  const category = useMemo(() => (categoryId && data?.find(({ id }) => id === categoryId)) || null, [data, categoryId]);

  const categoriesMap = useMemo(() => getCategoriesRecursive(data ?? [], parentId), [data, parentId]);

  const currentList = useMemo(
    () =>
      (category && data?.filter(({ parentId: categoryParentId }) => categoryParentId === category.parentId)) || null,
    [data, categoryId],
  );

  const notFound = !!categoryId && !category;

  return { isLoading, list: data, map: categoriesMap, category, currentList, notFound };
};
