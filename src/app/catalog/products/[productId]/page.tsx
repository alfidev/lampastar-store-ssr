import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';

import { CatalogProductPage } from './catalogProductPage';

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const newsItemInitialData = await getNewsItemDataRequest(params.id);
//
//   const news = newsItemInitialData?.list?.[0];
//
//   return {
//     title: `${news?.title} | ${DEFAULT_METADATA_TITLE}` || '',
//     description: news?.text || '',
//   };
// }

export default async function Page({ params }: { params: { productId: string } }) {
  return <CatalogProductPage />;
}
