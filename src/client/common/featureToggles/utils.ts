import { FeatureTogglesLocalStorageType } from "./types";
import { featureToggleState } from "./featureToggleState";

const FEATURE_TOGGLES_KEY = "FEATURE_TOGGLES";

export const getToggles = () => {
  const toggles: FeatureTogglesLocalStorageType = JSON.parse(
    localStorage.getItem(FEATURE_TOGGLES_KEY) || "{}"
  );

  return Object.keys(featureToggleState).reduce(
    (acc, currentName) => ({
      ...acc,
      [currentName]: {
        ...featureToggleState[currentName as keyof typeof featureToggleState],
        enabled:
          featureToggleState[currentName as keyof typeof featureToggleState]
            .enabled || toggles[currentName],
      },
    }),
    {}
  );
};

export const setToggles = (toggles: FeatureTogglesLocalStorageType) => {
  const localToggles = Object.keys(toggles).reduce(
    (acc, currentName) => ({
      ...acc,
      ...(toggles[currentName] !==
        featureToggleState[currentName as keyof typeof featureToggleState]
          .enabled && {
        [currentName]: toggles[currentName],
      }),
    }),
    {}
  );
  console.log(localToggles);
  localStorage.setItem(FEATURE_TOGGLES_KEY, JSON.stringify(localToggles));
};
