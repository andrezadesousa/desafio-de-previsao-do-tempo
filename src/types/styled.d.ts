import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    headerBackground: string;
    cardBackground: string;
    text: string;
    textSecondary: string;
    primary: string;
    primaryHover: string;
    border: string;
    shadow: string;
    inputBackground: string;
    accent: string;
    success: string;
    warning: string;
    error: string;
    isDark: boolean;
  }
}
