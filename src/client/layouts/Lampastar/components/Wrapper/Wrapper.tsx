import React from "react";
import { ReactNode } from "react";

import { GlobalStyle } from "./styled";
import { Header } from "../Header";
import { ThemeProvider } from "styled-components";
import { LIGHT_THEME } from "../../themes";
import { Footer } from "../Footer";
import { ContentWrapper } from "../../styledComponents";

type Props = {
  children: ReactNode;
};

export const Wrapper = ({ children }: Props) => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <GlobalStyle
        backgroundColor={LIGHT_THEME.color.background.main}
        htmlColor={LIGHT_THEME.color.background.secondary}
        textColor={LIGHT_THEME.color.text.primary}
      />
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </ThemeProvider>
  );
};
