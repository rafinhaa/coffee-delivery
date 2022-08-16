import React from "react";

import { TitleContainer } from "./styles";
import { TTitleSize } from "./types";

type TTitleProps = TTitleSize & {
  children: React.ReactNode;
};

import { defaultTheme } from "../../../styles/themes/default";

export const Title: React.FC<TTitleProps> = ({
  children,
  size = "m",
  color = "title",
  weight = 800,
}) => {
  const sizeMapping = {
    xs: defaultTheme.fontSizes["title-title-xs"],
    s: defaultTheme.fontSizes["title-title-s"],
    m: defaultTheme.fontSizes["title-title-m"],
    l: defaultTheme.fontSizes["title-title-l"],
    xl: defaultTheme.fontSizes["title-title-xl"],
  };

  const colorMapping = {
    title: defaultTheme.colors["base-title"],
    subtitle: defaultTheme.colors["base-subtitle"],
  };

  return (
    <TitleContainer
      size={sizeMapping[size]}
      color={colorMapping[color]}
      weight={weight}
    >
      {children}
    </TitleContainer>
  );
};
