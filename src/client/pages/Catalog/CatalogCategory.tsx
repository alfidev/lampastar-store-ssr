import React from 'react';
import { useParams } from 'react-router-dom';
import { CatalogCategory as CatalogCategoryComponent } from '@modules/Catalog';

export const CatalogCategory = () => {
  const { categoryAlias } = useParams<{ categoryAlias: string }>();

  return <CatalogCategoryComponent key={categoryAlias} categoryAlias={categoryAlias || ''} />;
};
