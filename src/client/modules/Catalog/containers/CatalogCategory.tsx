import React, { useState } from 'react';
import { PageTitle } from '@layouts/Lampastar';
import { ProductsList, ProductsFilters, ControlPanel, PaginationPanel, ProductsListSkeleton } from '../components';
import { useCategories, useProductActions, useProducts } from '../hooks';
import styled from 'styled-components';
import { ORDER_TYPE, SORT_TYPE, VIEW_MODE } from '../constants';
import { ProductType } from '../types';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(SORT_TYPE.price);
  const [order, setOrder] = useState(ORDER_TYPE.ASC);
  const [viewMode, setViewMode] = useState(VIEW_MODE.grid);

  const { category, map } = useCategories({ categoryId: categoryAlias });

  const {
    list: products,
    totalPage,
    isLoading: isLoadingProducts,
  } = useProducts({ category: categoryAlias, page, sort, order });
  const { handleClickCard } = useProductActions();

  const isLoadingFilters = false;

  const { name: categoryName } = category || {};

  const onChangeCount = (product: ProductType, count: number) => {
    console.log('addProduct', product.name, 'count', count);
  };

  const onChangeFavourite = (product: ProductType, value: boolean) => {
    console.log('addFavourite', product.name, 'value', value);
  };

  const onClickCategory = (id: string) => {
    navigate(`/catalog/${id}`);
  };

  const getProductsJSX = () => {
    if (isLoadingProducts) return <ProductsListSkeleton />;

    return (
      <ProductsList
        products={products}
        mode={viewMode}
        onChangeCount={onChangeCount}
        onChangeFavourite={onChangeFavourite}
        onClickCard={handleClickCard}
      />
    );
  };

  const getProductsFiltersJSX = () => {
    if (isLoadingFilters) return <>Filters skeleton</>;

    return <ProductsFilters categoriesMap={map} onClickCategory={onClickCategory} />;
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
