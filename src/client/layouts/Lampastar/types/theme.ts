import { FlattenInterpolation, ThemeProps } from 'styled-components';

type Font = FlattenInterpolation<ThemeProps<ThemeType>>;

export type TypographyNames =
  | 'title1'
  | 'title2'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'mini1'
  | 'mini2'
  | 'main1'
  | 'main2';

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
  contrastLine: string;
  light: string;
  lightTwo: string;
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

export type SizesType = {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
};

export type ThemeType = {
  color: {
    background: {
      main: string;
      light: string;
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
    buttons: {
      primary: string;
      primaryHover: string;
      primaryActive: string;
      secondary: string;
      secondaryHover: string;
      secondaryActive: string;
      text: string;
      textHover: string;
      textActive: string;
      disabled: string;
    };
  };
  sizes: SizesType;
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
