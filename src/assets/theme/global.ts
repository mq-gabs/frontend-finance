import { createGlobalStyle } from "styled-components";
import light from "./light";

export default createGlobalStyle`
  * {

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: DM Sans, sans-serif;
    font-size: 13px;
    user-select: none;

    @media (max-width: 600px) {
      font-size: 11px;
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
