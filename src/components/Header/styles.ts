import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background: ${({ theme: { colors } }) => colors["background"]};
  top: 0;
  left: 0;
  z-index: 1;
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
  background-color: ${({ theme: { colors } }) => colors["yellow-light"]};
  color: ${({ theme: { colors } }) => colors["yellow-dark"]};
  position: relative;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme: { colors } }) => colors["white"]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    background: ${({ theme: { colors } }) => colors["yellow-dark"]};
  }
`;
