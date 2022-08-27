import { FlattenInterpolation, ThemeProps } from 'styled-components';

type Font = FlattenInterpolation<ThemeProps<ThemeType>>;

export type TypographyNames = 'title1' | 'title2' | 'body1' | 'body2' | 'body3' | 'body4' | 'body5' | 'mini1' | 'mini2';

export type Typography = {
  // eslint-disable-next-line no-unused-vars
  [name in TypographyNames]: Font;
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

export type ThemeType = {
  color: {
    background: {
      main: string;
      primary: string;
      secondary: string;
      secondaryHover: string;
      tertiary: string;
      social: string;
      line: string;
      contrastLine: string;
      skeletonPrimary: string;
      skeletonSecondary: string;
    };
    border: {
      input: string;
    };
    opacity: {
      modal: string;
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
    xxxs: string;
    xxs: string;
    xs: string;
    s: string;
    m: string;
  };
  zIndex: {
    menu: number;
    modal: number;
  };
  typography: Typography;
};
