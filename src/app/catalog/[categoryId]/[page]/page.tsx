import { notFound } from 'next/navigation';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';
import { ORDER_TYPE, SORT_TYPE } from '@modules/Catalog/constants';
import { getCategoriesDataRequest, getCategoryProductDataRequest } from '@modules/Catalog/services/requests';

import { CatalogCategoryPage } from './catalogCategoryPage';

export async function generateMetadata({ params }: { params: { categoryId: string; page: string } }) {
  const { categoryId } = params;
  const categories = await getCategoriesDataRequest();

  const category = categories?.find(({ id }) => id === Number(categoryId));

  if (!category)
    return {
      title: `Категория не найдена | ${DEFAULT_METADATA_TITLE}` || '',
      description: 'Категория не найдена',
    };

  return {
    title: `${category?.name} | ${DEFAULT_METADATA_TITLE}` || '',
    description: category?.description || '',
  };
}

export default async function Page({ params }: { params: { categoryId: string; page: string } }) {
  const { categoryId, page = 1 } = params;

  const count = 18;

  const props = {
    category_id: Number(categoryId),
    start: count * (Number(page) - 1),
    limit: count,
    sort: SORT_TYPE.price,
    order: ORDER_TYPE.ASC,
  };

  const categories = await getCategoriesDataRequest();

  const category = categories?.find(({ id }) => id === Number(categoryId));

  if (!category) return notFound();

  const initialData = await getCategoryProductDataRequest(props);

  return <CatalogCategoryPage initialData={initialData} />;
}
