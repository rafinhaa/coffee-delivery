import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color ${({ theme: { colors } }) => colors["purple-dark"]}
  }
`;

export const InputStyleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme: { colors } }) => colors["base-button"]};
  background: ${({ theme: { colors } }) => colors["base-input"]};
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme: { colors } }) => colors["yellow-dark"]};
  }
`;

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  font-size: 0.75rem;
  padding: 0 0.75rem;
  color: ${({ theme: { colors } }) => colors["base-text"]};

  &::placeholder {
    color: ${({ theme: { colors } }) => colors["base-label"]};
  }
`;

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${({ theme: { colors } }) => colors["base-label"]};
`;
