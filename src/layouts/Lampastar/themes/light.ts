import { css } from 'styled-components';

import { fontRobotoBlack, fontRobotoBold, fontRobotoRegular } from '@common/constants/fonts';

import { ThemeType } from '../types';

import 'simplebar-react/dist/simplebar.min.css';

export const LIGHT_THEME: ThemeType = {
  color: {
    background: {
      main: '#F3F3F3',
      light: '#EDEDED',
      dark: '#000',
      primary: '#FFF',
      secondary: '#454545',
      secondaryHover: '#45454512',
      secondaryHoverLight: '#525252',
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
      light: '#D4D4D8',
      lightTwo: '#BABAC0',
    },
    status: {
      success: '#34c406',
      warning: '#ffcb4b',
      error: '#c70000',
    },
    statusBackground: {
      success: '#85bb73',
      warning: '#fff3d7',
      error: '#ffb3b3',
    },
    buttons: {
      disabled: '#D4D4D8',
      primary: '#FFB811',
      primaryHover: '#F2AA00',
      primaryActive: '#D49500',
      secondary: '#FF6945',
      secondaryHover: '#FA4B21',
      secondaryActive: '#F93A0D',
      text: '#2B3034',
      textHover: '#FF773D',
      textActive: '#C53B00',
    },
    tags: {
      new: '#41C34E',
      hit: '#ff1900',
      sale: '#7B61FF',
    },
    opacity: {
      modal: 'rgba(0,0,0,0.2)',
    },
  },
  sizes: {
    xs: '10px',
    s: '12px',
    m: '14px',
    l: '16px',
    xl: '18px',
    xxl: '20px',
    xxxl: '24px',
    xxxxl: '36px',
  },
  loaderSize: {
    s: '28px',
    m: '40px',
    l: '80px',
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
    xxxl: '64px',
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
    button: 10,
    menu: 100,
    modal: 1000,
    loader: 2000,
  },
  typography: {
    big1: css`
      font-size: 46px;
      line-height: 56px;
      ${fontRobotoBlack.style}
    `,
    big2: css`
      font-size: 32px;
      line-height: 40px;
      ${fontRobotoBold.style}
    `,
    big3: css`
      font-size: 24px;
      line-height: 40px;
      ${fontRobotoBold.style}
    `,
    title1: css`
      font-size: 28px;
      line-height: 40px;
      ${fontRobotoBold.style}
    `,
    title2: css`
      font-size: 24px;
      line-height: 36px;
      ${fontRobotoBold.style}
    `,
    main1: css`
      font-size: 24px;
      line-height: 36px;
      ${fontRobotoBold.style}
    `,
    main2: css`
      font-size: 18px;
      line-height: 24px;
      ${fontRobotoBold.style}
    `,
    mini0: css`
      font-size: 10px;
      line-height: 14px;
      ${fontRobotoRegular.style}
    `,
    mini1: css`
      font-size: 12px;
      line-height: 18px;
      ${fontRobotoRegular.style}
    `,
    mini2: css`
      font-size: 14px;
      line-height: 20px;
      ${fontRobotoRegular.style}
    `,
    body1: css`
      font-size: 14px;
      line-height: 20px;
      ${fontRobotoBold.style}
    `,
    body2: css`
      font-size: 16px;
      line-height: 20px;
      ${fontRobotoRegular.style}
    `,
    body3: css`
      font-size: 16px;
      line-height: 22px;
      ${fontRobotoBold.style}
    `,
    body4: css`
      font-size: 16px;
      line-height: 24px;
      ${fontRobotoRegular.style}
    `,
    body5: css`
      font-size: 18px;
      line-height: 24px;
      ${fontRobotoBold.style}
    `,
  },
};
