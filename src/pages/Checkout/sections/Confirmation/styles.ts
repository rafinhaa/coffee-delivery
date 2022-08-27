import styled from "styled-components";

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  color: ${({ theme: { colors } }) => colors["white"]};
  font-weight: 700;
  background: ${({ theme: { colors } }) => colors["yellow"]};
  font-size: ${({ theme: { fontSizes } }) => fontSizes["components-button-g"]};
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 1.3rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme: { colors } }) => colors["yellow-dark"]};
  }
`;
