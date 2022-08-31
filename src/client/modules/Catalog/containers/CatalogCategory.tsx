import React from 'react';
import { useParams } from 'react-router-dom';
import { PageTitle } from '@layouts/Lampastar';

export const CatalogCategory = () => {
  const { categoryAlias } = useParams<{ categoryAlias: string }>();
  return <PageTitle>{categoryAlias}</PageTitle>;
};
