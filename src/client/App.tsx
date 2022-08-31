import React, { StrictMode } from 'react';

import { InitialComponent } from '@common/components';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorContext } from '@common/types';
import { QueryClient, QueryClientProvider } from 'react-query';

interface Props {
  /** Data used in the react prerender process. Use only in the server side. */
  context?: ErrorContext;
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
export default function App({ context, helmetContext }: Props) {
  return (
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <QueryClientProvider client={queryClient}>
          <InitialComponent context={context} />
        </QueryClientProvider>
      </HelmetProvider>
    </StrictMode>
  );
}
