import { ReactNode } from "react";
import { defaultTheme } from "../../styles/themes/default";

export interface InfoIconProps {
  icon: ReactNode;
  iconColor: keyof typeof defaultTheme.colors;
  text: string | ReactNode;
}
