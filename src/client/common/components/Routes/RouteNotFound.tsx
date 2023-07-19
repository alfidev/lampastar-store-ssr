import { useContext } from 'react';

import { ErrorRouterContext } from '../../context';

export const RouteNotFound = () => {
  const { setStatusCode, error } = useContext(ErrorRouterContext);
  if (!setStatusCode) error.code = 404;
  else setStatusCode(404);
  return null;
};
