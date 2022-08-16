import { defaultTheme } from "../../../styles/themes/default";

export type TTextContainerProps = {
  size: typeof defaultTheme.fontSizes[keyof typeof defaultTheme.fontSizes];
  color: typeof defaultTheme.colors[keyof typeof defaultTheme.colors];
  weight: 400 | 700;
};

export type TTextSize = {
  size?: "s" | "m" | "l";
  color?: "text" | "subtitle" | "label";
  weight?: 400 | 700;
};
