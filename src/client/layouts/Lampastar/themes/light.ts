import { ThemeType } from '@layouts/Lampastar/types';
import { css } from 'styled-components';

export const LIGHT_THEME: ThemeType = {
  color: {
    background: {
      main: '#F3F3F3',
      primary: '#FFF',
      secondary: '#454545',
      secondaryHover: '#45454512',
      tertiary: '#FFB811',
      social: '#565656',
      line: '#D4D4D8',
      contrastLine: '#FF773D',
      skeletonPrimary: '#F3F3F3',
      skeletonSecondary: '#e3e3e3',
    },
    border: {
      input: '#BABAC0',
    },
    text: {
      primary: '#2B3034',
      secondary: '#FFF',
      tertiary: '#999999',
      copyright: '#565656',
      contrast: '#FFB811',
      contrastLine: '#FF773D',
    },
    buttons: {
      disabled: '#D4D4D8',
      primary: '#FFB811',
      primaryHover: '#F2AA00',
      primaryActive: '#D49500',
      secondary: '#FF773D',
      secondaryHover: '#FF5C15',
      secondaryActive: '#C53B00',
      text: '#2B3034',
      textHover: '#FF773D',
      textActive: '#C53B00',
    },
    opacity: {
      modal: 'rgba(0,0,0,0.2)',
    },
  },
  sizes: {
    m: '14px',
    l: '16px',
    xl: '18px',
    xxl: '20px',
    xxxl: '24px',
  },
  indents: {
    none: '0',
    xxxs: '2px',
    xxs: '4px',
    xs: '8px',
    s: '12px',
    m: '16px',
    l: '20px',
    xl: '24px',
    xxl: '32px',
    xxxxl: '80px',
  },
  radius: {
    xxxs: '2px',
    xxs: '4px',
    xs: '8px',
    s: '12px',
    m: '16px',
  },
  zIndex: {
    menu: 100,
    modal: 1000,
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
