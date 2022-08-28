import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background: ${({ theme: { colors } }) => colors["purple-light"]};
    border-color: ${({ theme: { colors } }) => colors["purple"]};

    &:hover {
      background: ${({ theme: { colors } }) => colors["purple-light"]};
    }
  }
`;

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${({ theme: { colors } }) => colors["base-button"]};
  color: ${({ theme: { colors } }) => colors["base-text"]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme: { colors } }) => colors["base-button"]};
  transition: 0.4s;

  &:hover {
    background: ${({ theme: { colors } }) => colors["base-hover"]};
  }
  svg {
    color: ${({ theme: { colors } }) => colors["purple"]};
  }

  user-select: none;
`;
