import React from "react";
import { defaultTheme } from "../../../styles/themes/default";

import { TextContainer } from "./styles";
import { TTextSize } from "./types";

type TTextProps = TTextSize & {
  children: React.ReactNode;
};

export const Text: React.FC<TTextProps> = ({
  children,
  size = "m",
  color = "text",
  weight = 400,
}) => {
  const sizeMapping = {
    s: defaultTheme.fontSizes["text-regular-s"],
    m: defaultTheme.fontSizes["text-regular-m"],
    l: defaultTheme.fontSizes["text-regular-l"],
  };

  const colorMapping = {
    text: defaultTheme.colors["base-text"],
    subtitle: defaultTheme.colors["base-subtitle"],
    label: defaultTheme.colors["base-label"],
  };

  return (
    <TextContainer
      size={sizeMapping[size]}
      color={colorMapping[color]}
      weight={weight}
    >
      {children}
    </TextContainer>
  );
};
