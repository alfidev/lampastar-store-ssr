import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { CatalogMain as CatalogMainComponent } from '@modules/Catalog';

export const CatalogMain = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get('search');
  const tag = searchParams.get('tag');

  return <CatalogMainComponent search={search} tag={tag} />;
};
