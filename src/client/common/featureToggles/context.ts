import React from "react";
import { FeatureToggleList } from "./types";

export const FeatureTogglesContext = React.createContext<FeatureToggleList>({});

export const FeatureTogglesContextProvider = FeatureTogglesContext.Provider;
