import React, { StrictMode } from "react";

import { ServerDataProvider } from "./serverData";
import { InitialComponent } from "@common/components";
import { HelmetProvider } from "react-helmet-async";
import {
  FeatureTogglesContextProvider,
  featureToggleState,
} from "@common/featureToggles";
import { ErrorContext } from "@common/types";

interface Props {
  /** Data used in the react prerender process. Use only in the server side. */
  serverData?: unknown;
  context?: ErrorContext;
}

/** * The root react component for both client side rendering and server side rendering */
export default function App(props: Props) {
  return (
    <HelmetProvider>
      <ServerDataProvider value={props ? props.serverData : null}>
        <StrictMode>
          <FeatureTogglesContextProvider value={featureToggleState}>
            <InitialComponent context={props.context} />
          </FeatureTogglesContextProvider>
        </StrictMode>
      </ServerDataProvider>
    </HelmetProvider>
  );
}
