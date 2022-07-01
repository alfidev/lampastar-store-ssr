import { FlattenInterpolation, ThemeProps } from "styled-components";

type Font = FlattenInterpolation<ThemeProps<Theme>>;

export type Typography = {
  body1: Font;
  body2: Font;
  body3: Font;
  body4: Font;
  mini1: Font;
  mini2: Font;
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
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      copyright: string;
    };
  };
  sizes: {
    m: string;
    l: string;
    xl: string;
    xxl: string;
  };
  indents: {
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
  radius: {
    xxs: string;
    xs: string;
    s: string;
    m: string;
  };
  typography: Typography;
};
