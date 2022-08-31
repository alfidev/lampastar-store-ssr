import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CATALOG_CATEGORY_PATH, CATALOG_MAIN_PATH } from '../constants';
import { CatalogCategories, CatalogCategory } from '../containers';

export const CatalogPage = () => {
  return (
    <Routes>
      <Route path={CATALOG_MAIN_PATH} element={<CatalogCategories />} />
      <Route path={CATALOG_CATEGORY_PATH} element={<CatalogCategory />} />
    </Routes>
  );
};
