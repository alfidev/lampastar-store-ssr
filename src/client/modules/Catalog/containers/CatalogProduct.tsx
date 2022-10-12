import React from 'react';
import { useParams } from 'react-router-dom';
import { PageTitle } from '@layouts/Lampastar';

export const CatalogProduct = () => {
  const { productAlias } = useParams<{ productAlias: string }>();
  return <PageTitle>{productAlias}</PageTitle>;
};
