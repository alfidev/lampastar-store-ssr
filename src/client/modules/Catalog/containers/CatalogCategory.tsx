import React, { useState } from 'react';
import { PageTitle } from '@layouts/Lampastar';
import { ProductsList, ProductsFilters, ControlPanel, PaginationPanel, ProductsListSkeleton } from '../components';
import { useCategories, useProducts } from '@modules/Catalog/hooks';
import styled from 'styled-components';
import { ORDER_TYPE, SORT_TYPE, VIEW_MODE } from '@modules/Catalog/constants';

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

const ControlContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

const PaginationContainer = styled.div``;

export const CatalogCategory = ({ categoryAlias }: Props) => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(SORT_TYPE.price);
  const [order, setOrder] = useState(ORDER_TYPE.ASC);
  const [viewMode, setViewMode] = useState(VIEW_MODE.list);

  const { category } = useCategories(categoryAlias);
  const {
    list: products,
    totalPage,
    isLoading: isLoadingProducts,
  } = useProducts({ category: categoryAlias, page, sort, order });
  const isLoadingFilters = false;

  const { name: categoryName } = category || {};

  const getProductsJSX = () => {
    if (isLoadingProducts) return <ProductsListSkeleton />;

    return <ProductsList products={products} mode={viewMode} />;
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
            <ControlPanel
              sortType={sort}
              orderType={order}
              viewMode={viewMode}
              setSortType={setSort}
              setOrderType={setOrder}
              setViewMode={setViewMode}
            />
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
