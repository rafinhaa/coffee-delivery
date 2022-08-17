import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  font-size: ${({ theme: { fontSizes } }) => fontSizes["text-regular-s"]};
`;

export const Location = styled(BaseButton)`
  background-color: ${({ theme: { colors } }) => colors["purple-light"]};
  color: ${({ theme: { colors } }) => colors["purple-dark"]};

  svg {
    color: ${({ theme: { colors } }) => colors["purple"]};
  }
`;

export const Cart = styled(BaseButton)`
  background-color: ${({ theme: { colors } }) => colors["purple-dark"]};
  color: ${({ theme: { colors } }) => colors["base-card"]};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors["purple"]};
  }
`;