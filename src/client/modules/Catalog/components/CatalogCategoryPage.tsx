import React from 'react';
import { useParams } from 'react-router-dom';
import { CatalogCategory } from '@modules/Catalog/containers';

export const CatalogCategoryPage = () => {
  const { categoryAlias } = useParams<{ categoryAlias: string }>();

  return <CatalogCategory key={categoryAlias} categoryAlias={categoryAlias || ''} />;
};
