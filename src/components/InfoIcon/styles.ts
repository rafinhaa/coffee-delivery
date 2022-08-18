import styled from "styled-components";
import { InfoIconProps } from "./types";

export type TIconContainer = Omit<InfoIconProps, "text" | "icon">;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconContainer = styled.div<TIconContainer>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background-color: ${({ iconColor, theme }) => theme.colors[iconColor]};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
