import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({ theme: { colors } }) => colors["background"]};
    color: ${({ theme: { colors } }) => colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${({ theme: { fonts } }) => fonts["regular"]};
    font-weight: 400;
    font-size: ${({ theme: { fontSizes } }) => fontSizes["text-regular-m"]};
  }
`;
