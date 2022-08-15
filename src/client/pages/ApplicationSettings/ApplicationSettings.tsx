import React from "react";
import { useFeatureList } from "@common/featureToggles";

export const ApplicationSettings = () => {
  const featureList = useFeatureList();

  return (
    <>
      {featureList.map(({ name, enabled, description }) => (
        <div key={name}>
          <p>Name: {name}</p>
          <p>Enabled: {String(enabled)}</p>
          <p>Description: {description}</p>
        </div>
      ))}
    </>
  );
};
