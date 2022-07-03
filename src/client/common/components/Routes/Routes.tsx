import React from "react";
import { Routes as RoutesSwitch, Route } from "react-router-dom";
import { ROUTES } from "../../constants";
import { RouteComponent } from "../RouteComponent";

export const Routes = () => {
  return (
    <RoutesSwitch>
      {Object.values(ROUTES).map(({ path, title, component }) => (
        <Route
          key={path}
          path={path}
          element={<RouteComponent title={title}>{component}</RouteComponent>}
        />
      ))}
    </RoutesSwitch>
  );
};
