import { FC } from "react";

export type RouteType = {
  title: string;
  label: string;
  path: string;
  component: FC;
};
