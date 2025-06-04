"use client";

import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import WeatherApp from "./components/WeatherApp";
import { store } from "./store/store";
import "./global/global.css";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <WeatherApp />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
