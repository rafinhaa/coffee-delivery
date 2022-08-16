import styled from "styled-components";
import { TTitleContainerProps } from "./types";

export const TitleContainer = styled.h1<TTitleContainerProps>`
  color: ${({ color }) => color};
  font-family: ${({ theme: { fonts } }) => fonts.title};
  font-size: ${({ size }) => size};
  line-height: 130%;
  font-weight: ${({ weight }) => weight};
`;
