import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { YaMapDataType } from "../../types";

type Props = {
  width?: number | string;
  height?: number;
  mapData: YaMapDataType;
};

export const YaMap = ({ mapData: { center, zoom }, ...props }: Props) => {
  return (
    <YMaps>
      <Map {...props} defaultState={{ center, zoom }}>
        <Placemark defaultGeometry={center} />
      </Map>
    </YMaps>
  );
};
