type FeatureToggle = {
  enabled: boolean;
  description: string;
};

export type FeatureToggleList = Record<string, FeatureToggle>;
