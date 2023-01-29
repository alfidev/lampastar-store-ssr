import React from 'react';

import { Breadcrumbs } from '@ui/components/Breadcrumbs';

import { ContentSection } from '../../../pages/Home/styled';
import { CAROUSEL_TYPE } from '../constants';
import { useProduct, useProductActions } from '../hooks';
import { ProductDetail } from '../modules/product';
import { ProductType } from '../types';
import { CatalogCarousel } from './CatalogCarousel';

type Props = {
  productId: number;
};

const getBreadcrumbItem = (product: ProductType) => ({ path: `/catalog/products/${product.id}`, label: product.name });

export const CatalogProduct = ({ productId }: Props) => {
  const { product, isLoading, isError } = useProduct(productId);
  const { handleChangeBasketCount } = useProductActions();

  if (isLoading) return <>LOADING...</>;

  if (isError || !product) return <>ERROR...</>;

  return (
    <>
      <Breadcrumbs items={[getBreadcrumbItem(product)]} />
      <ProductDetail product={product} onChangeCount={handleChangeBasketCount} />
      <ContentSection>
        <CatalogCarousel type={CAROUSEL_TYPE.VIEW} />
      </ContentSection>
    </>
  );
};
