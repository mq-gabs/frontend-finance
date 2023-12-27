import styled from "styled-components";
import { showUp } from "../../assets/theme/animations";

export const StyledSign = styled.main<{ isregister: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 100vh;

  .sign {
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    ${showUp}
  }

  .sign form {
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    max-width: 450px;
  }

  ${({ isregister }) =>
    isregister === "true"
      ? `
    .up {
      display: block;
    }
    .in {
      display: none;
    } 
    `
      : `
    .up {
      display: none;
    }
    .in {
      display: block;
    } 
  `}
`;
