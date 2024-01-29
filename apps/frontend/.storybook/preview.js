import { ThemeProvider } from "@app/core/ui/theme/theme-provider";
import { GlobalStyle } from "../src/GlobalStyle";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
