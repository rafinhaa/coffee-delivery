import "styled-components";
import { defaultTheme } from "../styles/themes/default";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof defaultTheme.colors;
    fontSizes: typeof defaultTheme.fontSizes;
    fonts: typeof defaultTheme.fonts;
  }
}
