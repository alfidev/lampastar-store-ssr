import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { PageTitle } from '@layouts/Lampastar';
import { adaptive } from '@ui/components';

import { ProductsList, ProductsFilters, ControlPanel, PaginationPanel, ProductsListSkeleton } from '../components';
import { ORDER_TYPE, SORT_TYPE, VIEW_MODE } from '../constants';
import { useCategories, useControlAndFilters, useFilters, useProductActions, useProducts } from '../hooks';

type Props = {
  categoryId: number;
};

const CatalogContainer = styled.div`
  display: flex;

  ${adaptive.maxWidth.desktopS} {
    flex-direction: column;
  }
`;

const FiltersContainer = styled.div`
  min-width: 264px;
  width: 264px;
  margin-right: ${({ theme }) => theme.indents.l};

  ${adaptive.maxWidth.desktopS} {
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

export const CatalogCategory = ({ categoryId }: Props) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(SORT_TYPE.price);
  const [order, setOrder] = useState(ORDER_TYPE.ASC);
  const [viewMode, setViewMode] = useState(VIEW_MODE.grid);
  const [filtersValues, setFiltersValues] = useState({});

  const { category, currentList } = useCategories({ categoryId, parentId: categoryId });

  const {
    list: products,
    totalPage,
    isLoading: isLoadingProducts,
  } = useProducts({ category: categoryId, page, sort, order, filters: filtersValues });
  const { handleClickCard, handleChangeFavourite, handleChangeCompare, handleChangeBasketCount } = useProductActions();
  const { list: filters, priceLimits } = useFilters(categoryId);

  const { isShowedFilters, openFilters, closeFilters } = useControlAndFilters();

  const isLoadingFilters = false;

  const { name: categoryName } = category || {};

  const onClickCategory = (id: number) => {
    setFiltersValues({});

    navigate(`/catalog/${id}`);
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
