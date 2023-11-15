'use client';

import { useParams } from 'next/navigation';
import React from 'react';

import { CatalogProduct as CatalogProductComponent } from '@modules/Catalog';

export const CatalogProductPage = () => {
  const { productId } = useParams<{ productId: string }>();

  return <CatalogProductComponent productId={Number(productId || 0)} />;
};
