import React, { useState } from 'react';
import { PageTitle } from '@layouts/Lampastar';
import { ProductsList, ProductsFilters, ControlPanel, PaginationPanel, ProductsListSkeleton } from '../components';
import { useCategories, useProducts } from '@modules/Catalog/hooks';
import styled from 'styled-components';

type Props = {
  categoryAlias: string;
};

const CatalogContainer = styled.div`
  display: flex;
`;

const FiltersContainer = styled.div`
  min-width: 264px;
  width: 264px;
  margin-right: ${({ theme }) => theme.indents.l};
`;

const ProductsContainer = styled.div`
  flex-grow: 1;
`;

const ControlContainer = styled.div``;

const PaginationContainer = styled.div``;

export const CatalogCategory = ({ categoryAlias }: Props) => {
  const [page, setPage] = useState(1);

  const { category } = useCategories(categoryAlias);
  const { list: products, totalPage, isLoading: isLoadingProducts } = useProducts(categoryAlias, page);
  const isLoadingFilters = false;

  const { name: categoryName } = category || {};

  const getProductsJSX = () => {
    if (isLoadingProducts) return <ProductsListSkeleton />;

    return <ProductsList products={products} lineMode={false} />;
  };

  const getProductsFiltersJSX = () => {
    if (isLoadingFilters) return <>Filters skeleton</>;

    return <ProductsFilters />;
  };

  return (
    <>
      <PageTitle>{categoryName}</PageTitle>
      <CatalogContainer>
        <FiltersContainer>{getProductsFiltersJSX()}</FiltersContainer>
        <ProductsContainer>
          <ControlContainer>
            <ControlPanel />
          </ControlContainer>
          {getProductsJSX()}
          <PaginationContainer>
            <PaginationPanel page={page} total={totalPage} setPage={setPage} />
          </PaginationContainer>
        </ProductsContainer>
      </CatalogContainer>
    </>
  );
};
