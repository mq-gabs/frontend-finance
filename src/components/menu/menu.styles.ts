import styled from "styled-components";
import { transition } from "../../assets/theme/animations";

export const StyledMenu = styled.aside`
  position: abosolute;
  width: 120px;
  height: 100vh;
  left: 0;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: grid;
    gap: 2rem;
    width: 100%;
  }

  ul li {
    list-style: none;
  }

  ul li a {
    ${transition}
    font-size: 0.8rem;
    text-transform: uppercase;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    border-radius: 0.3rem;
    color: ${({ theme }) => theme.colors.light};
  }

  ul li a:hover {
    background: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
