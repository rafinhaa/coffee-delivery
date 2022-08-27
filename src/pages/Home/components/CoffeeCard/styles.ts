import styled from "styled-components";

export const CoffeeCardContent = styled.div`
  width: 100%;
  background: ${({ theme: { colors } }) => colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  text-align: center;
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  span {
    background: ${({ theme: { colors } }) => colors["yellow-light"]};
    color: ${({ theme: { colors } }) => colors["yellow-dark"]};
    font-size: ${({ theme: { fontSizes } }) => fontSizes["components-tag"]};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: bold;
  }
`;

export const Name = styled.div`
  margin-bottom: 0.5rem;
`;

export const Description = styled.div`
  margin-bottom: 2rem;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem:
    }
  }
`;

export const AddCartWrapper = styled.div`
  width: 7.5rem;
  > button {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme: { colors } }) => colors["purple-dark"]};
    color: ${({ theme: { colors } }) => colors["base-card"]};
    margin-left: 0.3rem;

    &:hover {
      background: ${({ theme: { colors } }) => colors["purple"]};
    }
  }
`;
