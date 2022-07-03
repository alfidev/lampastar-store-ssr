import React, { StrictMode } from "react";

import { ServerDataProvider } from "./serverData";
import { InitialComponent } from "@common/components";
import { HelmetProvider } from "react-helmet-async";

interface Props {
  /** Data used in the react prerender process. Use only in the server side. */
  serverData?: unknown;
}

/** * The root react component for both client side rendering and server side rendering */
export default function App(props: Props) {
  return (
    <HelmetProvider>
      <ServerDataProvider value={props ? props.serverData : null}>
        <StrictMode>
          <InitialComponent />
        </StrictMode>
      </ServerDataProvider>
    </HelmetProvider>
  );
}
