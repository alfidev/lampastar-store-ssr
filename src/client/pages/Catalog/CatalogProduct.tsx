import React from 'react';
import { useParams } from 'react-router-dom';
import { CatalogProduct as CatalogProductComponent } from '@modules/Catalog';

export const CatalogProduct = () => {
  const { productAlias } = useParams<{ productAlias: string }>();

  return <CatalogProductComponent productId={Number(productAlias || 0)} />;
};
