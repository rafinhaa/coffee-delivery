import { defaultTheme } from "../../../styles/themes/default";

export type TTitleContainerProps = {
  size: typeof defaultTheme.fontSizes[keyof typeof defaultTheme.fontSizes];
  color: typeof defaultTheme.colors[keyof typeof defaultTheme.colors];
  weight: number;
};

export type TTitleSize = {
  size?: "xs" | "s" | "m" | "l" | "xl";
  color?: "title" | "subtitle";
  weight?: 700 | 800;
};
