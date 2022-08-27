import React from "react";
import { Routes, Route } from "react-router-dom";
import { CATALOG_MAIN_PATH } from "../constants";
import { CatalogCategories } from "../containers";

export const CatalogPage = () => {
  return (
    <Routes>
      <Route path={CATALOG_MAIN_PATH} element={<CatalogCategories />} />
    </Routes>
  );
};
