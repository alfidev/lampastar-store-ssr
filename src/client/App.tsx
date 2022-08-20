import React, { StrictMode } from "react";

import { InitialComponent } from "@common/components";
import { HelmetProvider } from "react-helmet-async";
import { ErrorContext } from "@common/types";

interface Props {
  /** Data used in the react prerender process. Use only in the server side. */
  context?: ErrorContext;
  helmetContext?: Record<any, any>;
}

/** * The root react component for both client side rendering and server side rendering */
export default function App({ context, helmetContext }: Props) {
  return (
    <HelmetProvider context={helmetContext}>
      <StrictMode>
        <InitialComponent context={context} />
      </StrictMode>
    </HelmetProvider>
  );
}
