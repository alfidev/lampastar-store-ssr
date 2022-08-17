import React, { useEffect, useState } from "react";
import { setToggles, useFeaturesBase } from "@common/featureToggles";
import { ToggleCheckBox } from "@ui/components";
import { FeatureTogglesLocalStorageType } from "@common/featureToggles/types";
import { StyledButton, ToggleCard, ToggleInfo } from "./styled";
import { Typography } from "@ui/components/Typography";

export const ApplicationSettings = () => {
  const [toggles, setTogglesState] = useState<FeatureTogglesLocalStorageType>(
    {}
  );
  const featureToggles = useFeaturesBase();

  useEffect(() => {
    const toggles = Object.keys(featureToggles).reduce(
      (acc, currentName) => ({
        ...acc,
        [currentName]: featureToggles[currentName].enabled,
      }),
      {}
    );
    setTogglesState(toggles);
  }, [featureToggles]);

  const onSaveHandler = () => {
    setToggles(toggles);
    location.reload();
  };

  return (
    <>
      {Object.keys(featureToggles).map((name) => {
        const { description } = featureToggles[name];

        return (
          <ToggleCard key={name}>
            <ToggleInfo>
              <Typography variant="body1" tag="p">
                {name}
              </Typography>
              <Typography variant="body1" tag="p" color="tertiary">
                {description}
              </Typography>
            </ToggleInfo>
            <ToggleCheckBox
              checked={toggles[name]}
              onClick={() =>
                setTogglesState({ ...toggles, [name]: !toggles[name] })
              }
            />
          </ToggleCard>
        );
      })}
      <StyledButton onClick={onSaveHandler}>Сохранить</StyledButton>
    </>
  );
};
