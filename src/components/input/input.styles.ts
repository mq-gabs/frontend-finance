import styled from "styled-components";
import { bright, transition } from "../../assets/theme/animations";

export const StyledInput = styled.div`
  padding: 0rem 1rem;
  border-radius: 5rem;
  display: grid;
  grid-template-rows: 1fr;
  gap: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.grey};
  background: ${({ theme }) => theme.colors.light};
  height: 3rem;
  ${transition}
  &:hover {
    ${bright}
  }

  > input {
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.dark};
    background: ${({ theme }) => theme.colors.light};
  }

  > input::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  &:has(input:focus) {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
