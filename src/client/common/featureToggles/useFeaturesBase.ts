import { useContext } from "react";
import { FeatureTogglesContext } from "./context";

export const useFeaturesBase = () => {
  return useContext(FeatureTogglesContext);
};
