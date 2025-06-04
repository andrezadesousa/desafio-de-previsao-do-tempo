"use client";

import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "@/store/store";
import WeatherApp from "@/components/WeatherApp";
import { ThemeProvider } from "@/context/ThemeContext";

const queryClient = new QueryClient();

export default function WeatherPage() {
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
