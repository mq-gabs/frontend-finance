import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM sans', sans-serif;
    font-size: 14px;
    user-select: none;

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  body {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;
