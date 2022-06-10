import { FC, PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme } from "./theme";

export const ThemeProvider: FC<PropsWithChildren<{}>> = ({ children }) => (
  <StyledThemeProvider theme={Theme}>{children}</StyledThemeProvider>
);
