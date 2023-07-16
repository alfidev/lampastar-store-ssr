import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { RouteNotFound } from '@common/components/Routes';
import { CATALOG_CATEGORY_PATH, CATALOG_MAIN_PATH, CATALOG_PRODUCT_PATH } from '@modules/Catalog';

import { CatalogCategory } from './CatalogCategory';
import { CatalogMain } from './CatalogMain';
import { CatalogProduct } from './CatalogProduct';

export const Catalog = () => (
  <Routes>
    <Route path={CATALOG_MAIN_PATH} element={<CatalogMain />} />
    <Route path={CATALOG_CATEGORY_PATH} element={<CatalogCategory />} />
    <Route path={CATALOG_PRODUCT_PATH} element={<CatalogProduct />} />
    <Route path="*" element={<RouteNotFound />} />
  </Routes>
);
