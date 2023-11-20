'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styled from 'styled-components';

import { getCategoriesBreadcrumbs } from '@common/utils/breadcrumbs';
import { ProductsTypeResponse } from '@modules/Catalog/types';
import { Breadcrumbs } from '@ui/components/Breadcrumbs';

import { PageTitle } from '../../../layouts/Lampastar/components/PageTitle';
import { adaptive } from '../../../ui/components';
import { ProductsList, ProductsFilters, ControlPanel, PaginationPanel, ProductsListSkeleton } from '../components';
import { ORDER_TYPE, SORT_TYPE, VIEW_MODE } from '../constants';
import { useCategories, useControlAndFilters, useFilters, useProductActions, useProducts } from '../hooks';

type Props = {
  categoryId: number;
  page: number;
  productInitialData: ProductsTypeResponse;
};

const CatalogContainer = styled.div`
  display: flex;

  ${adaptive.maxWidth.tablet} {
    flex-direction: column;
  }
`;

const FiltersContainer = styled.div`
  min-width: 264px;
  width: 264px;
  margin-right: ${({ theme }) => theme.indents.l};

  ${adaptive.maxWidth.tablet} {
    width: 100%;
  }
`;

const ProductsContainer = styled.div`
  flex-grow: 1;
`;

const ControlContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

const PaginationContainer = styled.div``;

export const CatalogCategory = ({ categoryId, page, productInitialData }: Props) => {
  const router = useRouter();

  const [sort, setSort] = useState(SORT_TYPE.price);
  const [order, setOrder] = useState(ORDER_TYPE.ASC);
  const [viewMode, setViewMode] = useState(VIEW_MODE.grid);
  const [filtersValues, setFiltersValues] = useState({});

  const { isLoading, category, currentList, notFound } = useCategories({ categoryId, parentId: categoryId });

  const {
    list: products,
    breadcrumbs,
    totalPage,
    isLoading: isLoadingProducts,
  } = useProducts({ category: categoryId, page, sort, order, filters: filtersValues, initialData: productInitialData });
  const { handleClickCard, handleChangeFavourite, handleChangeCompare, handleChangeBasketCount } = useProductActions();
  const { list: filters, priceLimits } = useFilters(categoryId);

  const { isShowedFilters, openFilters, closeFilters } = useControlAndFilters();

  const isLoadingFilters = false;

  const { name: categoryName } = category || {};

  const onClickCategory = (id: number) => {
    setFiltersValues({});

    router.push(`/catalog/${id}/1`);
  };

  const setPage = (newPage: number) => {
    router.push(`/catalog/${categoryId}/${newPage}`);
  };

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

  const getProductsFiltersJSX = () => {
    if (isLoadingFilters) return <>Filters skeleton</>;

    return (
      <ProductsFilters
        filters={filters}
        categories={currentList}
        categoryId={categoryId}
        onClickCategory={onClickCategory}
        showFilters={isShowedFilters}
        closeFilters={closeFilters}
        setFilters={setFiltersValues}
        priceLimits={priceLimits}
      />
    );
  };

  if (!isLoading && notFound) return <>NOT FOUND</>;

  return (
    <>
      <Breadcrumbs items={[...getCategoriesBreadcrumbs(breadcrumbs)]} />
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
              openFilters={openFilters}
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
