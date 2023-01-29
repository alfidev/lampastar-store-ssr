import React from 'react';
import { useParams } from 'react-router-dom';

import { CatalogCategory as CatalogCategoryComponent } from '@modules/Catalog';

export const CatalogCategory = () => {
  const { categoryAlias } = useParams<{ categoryAlias: string }>();

  return <CatalogCategoryComponent key={categoryAlias} categoryId={categoryAlias ? Number(categoryAlias) : 0} />;
};
