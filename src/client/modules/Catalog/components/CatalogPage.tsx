import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CATALOG_CATEGORY_PATH, CATALOG_MAIN_PATH, CATALOG_PRODUCT_PATH } from '../constants';
import { CatalogCategories, CatalogProduct } from '../containers';
import { CatalogCategoryPage } from './CatalogCategoryPage';

export const CatalogPage = () => {
  return (
    <Routes>
      <Route path={CATALOG_MAIN_PATH} element={<CatalogCategories />} />
      <Route path={CATALOG_CATEGORY_PATH} element={<CatalogCategoryPage />} />
      <Route path={CATALOG_PRODUCT_PATH} element={<CatalogProduct />} />
    </Routes>
  );
};
