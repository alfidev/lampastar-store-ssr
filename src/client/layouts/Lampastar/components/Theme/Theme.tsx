import React, { ReactNode } from "react";
import { GRID_THEME, LIGHT_THEME } from "../../themes";
import { GlobalStyle } from "./styled";
import { GridThemeProvider } from "styled-bootstrap-grid";
import { ThemeProvider } from "styled-components";

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <GlobalStyle
        backgroundColor={LIGHT_THEME.color.background.main}
        htmlColor={LIGHT_THEME.color.background.secondary}
        textColor={LIGHT_THEME.color.text.primary}
      />
      <GridThemeProvider gridTheme={GRID_THEME}>
        <>{children}</>
      </GridThemeProvider>
    </ThemeProvider>
  );
};
