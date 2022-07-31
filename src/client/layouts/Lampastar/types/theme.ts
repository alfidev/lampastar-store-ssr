import { FlattenInterpolation, ThemeProps } from "styled-components";

type Font = FlattenInterpolation<ThemeProps<Theme>>;

type TypographyNames =
  | "title1"
  | "title2"
  | "body1"
  | "body2"
  | "body3"
  | "body4"
  | "body5"
  | "mini1"
  | "mini2";

export type Typography = {
  [name in TypographyNames]: Font;
};

type BreakpointsType = {
  [name in "xs" | "sm" | "md" | "lg" | "xl"]: number;
};

export type TypographyColorType = {
  primary: string;
  secondary: string;
  tertiary: string;
  copyright: string;
  contrast: string;
};

export type IndentsType = {
  none: string;
  xxxs: string;
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxxl: string;
};

export type Theme = {
  color: {
    background: {
      main: string;
      primary: string;
      secondary: string;
      secondaryHover: string;
      tertiary: string;
      social: string;
    };
    border: {
      input: string;
    };
    text: TypographyColorType;
  };
  sizes: {
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  indents: IndentsType;
  radius: {
    xxs: string;
    xs: string;
    s: string;
    m: string;
  };
  typography: Typography;
  breakpoints: BreakpointsType;
};
