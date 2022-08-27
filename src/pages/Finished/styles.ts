import styled, { css } from "styled-components";

export const FinishedContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
`;

export const ConfirmationSection = styled.div`
  h1 {
    color: ${({ theme: { colors } }) => colors["yellow-dark"]};
  }
`;

export const OrderDetails = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  position: relative;
  background: ${({ theme: { colors } }) => colors["background"]};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    inset: -1px;
    border-radius: 7px 36px;
    ${({ theme: { colors } }) => css`
      background: linear-gradient(
        102.89deg,
        ${colors["yellow-dark"]} 2.61%,
        ${colors["purple"]} 98.76%
      );
    `}
  }
`;
