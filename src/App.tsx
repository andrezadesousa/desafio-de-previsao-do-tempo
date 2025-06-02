import { AppRoutes } from "./AppRoutes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "./context/ThemeContext";

export const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <AppRoutes />
  </ThemeProvider>
);
