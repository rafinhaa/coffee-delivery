import styled from "styled-components";
import { TTextContainerProps } from "./types";

export const TextContainer = styled.p<TTextContainerProps>`
  color: ${({ color }) => color};
  font-family: ${({ theme: { fonts } }) => fonts.title};
  font-size: ${({ size }) => size};
  line-height: 130%;
  font-weight: ${({ weight }) => weight};
`;
