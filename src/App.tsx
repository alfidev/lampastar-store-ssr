import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ReactQueryDevtools } from 'react-query/devtools';

import { InitialComponent } from './common/components/InitialComponents';
import { ErrorContext } from './common/types';

interface Props {
  /** Data used in the React prerender process. Use only in the server side. */
  errorContext?: ErrorContext;
  helmetContext?: Record<any, any>;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      cacheTime: 5 * 60 * 1000,
    },
  },
});

/** * The root react component for both client side rendering and server side rendering */
export default function App({ errorContext, helmetContext }: Props) {
  return (
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <InitialComponent context={errorContext} />
        </QueryClientProvider>
      </HelmetProvider>
    </StrictMode>
  );
}
