import React, { useContext, useEffect } from 'react';
import { Routes as RoutesSwitch, Route, useLocation } from 'react-router-dom';

import { NotFound } from '@pages';

import { ROUTES } from '../../constants';
import { ErrorRouterContext } from '../../context';
import { RouteComponent } from '../RouteComponent';
import { RouteNotFound } from '../Routes/RouteNotFound';

type Props = {
  themeWrapper: JSX.Element;
};

export const Routes = ({ themeWrapper }: Props) => {
  const { error, setStatusCode } = useContext(ErrorRouterContext);
  const location = useLocation();

  const isError = error.code;

  useEffect(() => {
    if (isError && setStatusCode) {
      setStatusCode(0);
    }
  }, [location]);

  if (isError) return <NotFound />;

  return (
    <>
      <RoutesSwitch>
        <Route path={ROUTES.home.path} element={themeWrapper}>
          {Object.values(ROUTES).map(({ path, route, title, component: Component }) => (
            <Route
              key={path}
              path={route || path}
              element={
                <RouteComponent title={title}>
                  <Component />
                </RouteComponent>
              }
            />
          ))}
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </RoutesSwitch>
    </>
  );
};
