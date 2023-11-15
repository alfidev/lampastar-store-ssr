import { Metadata } from 'next';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';

import { CatalogMainPage } from './catalogMainPage';

export const metadata: Metadata = {
  title: `Каталог | ${DEFAULT_METADATA_TITLE}`,
  description: `Каталог | ${DEFAULT_METADATA_TITLE}`,
};

export default async function Page() {
  return <CatalogMainPage />;
}
