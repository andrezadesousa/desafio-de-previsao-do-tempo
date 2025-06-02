import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Home } from "./pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Home />
    </QueryClientProvider>
  );
}

export default App;
