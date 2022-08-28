import { createContext } from 'react';
import { ErrorContext } from '@common/types';

export const defaultContext: ErrorContext = {
  error: { code: 0, message: '' },
};

export const ErrorRouterContext = createContext<ErrorContext>(defaultContext);
