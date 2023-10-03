import React, { memo, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import RobotoBlack from '@resources/fonts/Roboto-Black.ttf';
import RobotoBlackItalic from '@resources/fonts/Roboto-BlackItalic.ttf';
import RobotoBold from '@resources/fonts/Roboto-Bold.ttf';
import RobotoBoldItalic from '@resources/fonts/Roboto-BoldItalic.ttf';
import RobotoLight from '@resources/fonts/Roboto-Light.ttf';
import RobotoLightItalic from '@resources/fonts/Roboto-LightItalic.ttf';
import RobotoMedium from '@resources/fonts/Roboto-Medium.ttf';
import RobotoMediumItalic from '@resources/fonts/Roboto-MediumItalic.ttf';
import RobotoRegular from '@resources/fonts/Roboto-Regular.ttf';
import RobotoThin from '@resources/fonts/Roboto-Thin.ttf';
import RobotoThinItalic from '@resources/fonts/Roboto-ThinItalic.ttf';
import LampastarFontSvg from '@resources/fonts/lampastar.svg';
import LampastarFontTtf from '@resources/fonts/lampastar.ttf';
import LampastarFontWoff from '@resources/fonts/lampastar.woff';

import { LIGHT_THEME } from '../../themes';
import { GlobalStyle } from './styled';

type Props = {
  children: ReactNode;
};

const fontsCss = `
@font-face {
    font-family: 'Roboto';
    font-weight: 100;
    font-style: normal;
    src: url(${RobotoThin}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 100;
    font-style: italic;
    src: url(${RobotoThinItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 300;
    font-style: normal;
    src: url(${RobotoLight}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 300;
    font-style: italic;
    src: url(${RobotoLightItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    src: url(${RobotoRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    font-style: normal;
    src: url(${RobotoMedium}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    font-style: italic;
    src: url(${RobotoMediumItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    font-style: normal;
    src: url(${RobotoBold}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    font-style: italic;
    src: url(${RobotoBoldItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 900;
    font-style: normal;
    src: url(${RobotoBlack}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 900;
    font-style: italic;
    src: url(${RobotoBlackItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Lampastar';
    src: url(${LampastarFontWoff}) format('woff'),
      url(${LampastarFontTtf}) format('truetype'),
      url(${LampastarFontSvg}) format('svg');

    font-weight: normal;
    font-style: normal;
  }`;

const Fonts = memo(() => (
  <style
    /* eslint-disable-next-line react/no-danger */
    dangerouslySetInnerHTML={{
      __html: fontsCss,
    }}
  />
));

Fonts.displayName = 'Fonts';

export const Theme = ({ children }: Props) => (
  <ThemeProvider theme={LIGHT_THEME}>
    <GlobalStyle
      backgroundColor={LIGHT_THEME.color.background.main}
      htmlColor={LIGHT_THEME.color.background.secondary}
      textColor={LIGHT_THEME.color.text.primary}
    />
    <Fonts />
    {children}
  </ThemeProvider>
);
