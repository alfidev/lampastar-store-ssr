import { useContext, useMemo } from "react";
import { FeatureTogglesContext } from "./context";

export const useFeatureList = () => {
  const context = useContext(FeatureTogglesContext);

  return useMemo(
    () => Object.keys(context).map((key) => ({ name: key, ...context[key] })),
    []
  );
};
