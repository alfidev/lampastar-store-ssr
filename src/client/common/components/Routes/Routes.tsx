import React from "react";
import { Routes as RoutesSwitch, Route } from "react-router-dom";
import { ROUTES } from "client/common/constants";

export const Routes = () => {
  return (
    <RoutesSwitch>
      {Object.values(ROUTES).map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </RoutesSwitch>
  );
};
