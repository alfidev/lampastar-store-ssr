import React from 'react';
import { CatalogMain as CatalogMainComponent } from '@modules/Catalog';
import { useSearchParams } from 'react-router-dom';

export const CatalogMain = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get('search');

  return <CatalogMainComponent search={search} />;
};
