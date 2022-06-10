import { ThemeProvider } from "@app/core/ui/theme/theme-provider";
import { NavigationWireframe } from "@app/features/navigation";
import { devTools } from "@ngneat/elf-devtools";
import { GlobalStyle } from "./GlobalStyle";
devTools();

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <NavigationWireframe />
    </ThemeProvider>
  );
}

export default App;
