import styled from "styled-components";

export const InputStyleContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme: { colors } }) => colors["base-button"]};
  background: ${({ theme: { colors } }) => colors["base-input"]};

  &:focus {
    border-color: ${({ theme: { colors } }) => colors["yellow-dark"]};
  }

  color: ${({ theme: { colors } }) => colors["base-text"]};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    color: ${({ theme: { colors } }) => colors["base-label"]};
  }
`;
