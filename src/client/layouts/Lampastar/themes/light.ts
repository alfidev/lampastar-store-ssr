import { Theme } from "@layouts/Lampastar/types";
import { css } from "styled-components";

export const LIGHT_THEME: Theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  color: {
    background: {
      main: "#F3F3F3",
      primary: "#FFF",
      secondary: "#454545",
      secondaryHover: "#45454512",
      tertiary: "#FFB811",
      social: "#565656",
    },
    border: {
      input: "#BABAC0",
    },
    text: {
      primary: "#2B3034",
      secondary: "#FFF",
      tertiary: "#999999",
      copyright: "#565656",
      contrast: "#FFB811",
    },
  },
  sizes: {
    m: "14px",
    l: "16px",
    xl: "18px",
    xxl: "20px",
  },
  indents: {
    none: "0",
    xxxs: "2px",
    xxs: "4px",
    xs: "8px",
    s: "12px",
    m: "16px",
    l: "20px",
    xl: "24px",
    xxl: "32px",
    xxxxl: "80px",
  },
  radius: {
    xxs: "4px",
    xs: "8px",
    s: "12px",
    m: "16px",
  },
  typography: {
    title1: css`
      font-size: 28px;
      line-height: 40px;
      font-weight: 500;
    `,
    title2: css`
      font-size: 24px;
      line-height: 36px;
      font-weight: 500;
    `,
    mini1: css`
      font-size: 12px;
      line-height: 18px;
      font-weight: 400;
    `,
    mini2: css`
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
    `,
    body1: css`
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
    `,
    body2: css`
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
    `,
    body3: css`
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
    `,
    body4: css`
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
    `,
    body5: css`
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
    `,
  },
};

export const GRID_THEME = {
  gridColumns: 12,
  breakpoints: {
    xxl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 15,
  },
  col: {
    padding: 15,
  },
  container: {
    padding: 0,
    maxWidth: {
      xxl: 1141,
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};
