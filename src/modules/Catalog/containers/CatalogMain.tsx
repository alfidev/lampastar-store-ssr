'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

import { PageTitle } from '../../../layouts/Lampastar';
import { ProductsList, ControlPanel, PaginationPanel, ProductsListSkeleton } from '../components';
import { ORDER_TYPE, SORT_TYPE, VIEW_MODE } from '../constants';
import { useProductActions, useProducts } from '../hooks';

type Props = {
  search?: string | null;
  tag?: string | null;
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

export const CatalogMain = ({ search, tag }: Props) => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(SORT_TYPE.price);
  const [order, setOrder] = useState(ORDER_TYPE.ASC);
  const [viewMode, setViewMode] = useState(VIEW_MODE.grid);

  const {
    list: products,
    totalPage,
    isLoading: isLoadingProducts,
  } = useProducts({ page, sort, order, ...(search && { search }), ...(tag && { tag }) });

  const { handleClickCard, handleChangeFavourite, handleChangeCompare, handleChangeBasketCount } = useProductActions();

  const getProductsJSX = () => {
    if (isLoadingProducts) return <ProductsListSkeleton />;

    return (
      <ProductsList
        products={products}
        mode={viewMode}
        onChangeCount={handleChangeBasketCount}
        onChangeFavourite={handleChangeFavourite}
        onChangeCompare={handleChangeCompare}
        onClickCard={handleClickCard}
      />
    );
  };

  return (
    <>
      <PageTitle>{search || 'Каталог'}</PageTitle>
      <CatalogContainer>
        <FiltersContainer />
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
