import styled from "styled-components";

export const QuantityInputContainer = styled.div`
  flex: 1;
  background: ${({ theme: { colors } }) => colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;
  padding: 0 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    padding: 0.5rem;
    color: ${({ theme: { colors } }) => colors["base-title"]};
    &:focus {
      outline: none;
    }
  }
`;

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  weight: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${({ theme: { colors } }) => colors["purple"]};
  transition: 0.4s

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme: { colors } }) => colors["purple-dark"]};
  }
`;
