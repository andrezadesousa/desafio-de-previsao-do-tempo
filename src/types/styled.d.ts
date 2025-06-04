import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    cardBackground: string;
    text: string;
    textSecondary: string;
    primary: string;
    border: string;
    shadow: string;
    inputBackground: string;
  }
}
