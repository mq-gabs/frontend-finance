import { createGlobalStyle } from "styled-components";
import light from "./light";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Nunito, sans-serif;
    font-size: 14px;
    user-select: none;

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    background: ${light.colors.secondary};
  }

  a {
    text-decoration: none;
  }
`;
