'use client';

import { useParams } from 'next/navigation';
import React from 'react';

import { CatalogCategory as CatalogCategoryComponent } from '@modules/Catalog';
import { ProductsTypeResponse } from '@modules/Catalog/types';

type Props = {
  initialData: ProductsTypeResponse;
};

export const CatalogCategoryPage = ({ initialData }: Props) => {
  const { categoryId } = useParams<{ categoryId: string; page: string }>();

  return (
    <CatalogCategoryComponent
      key={categoryId}
      categoryId={categoryId ? Number(categoryId) : 0}
      productInitialData={initialData}
    />
  );
};
