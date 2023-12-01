import styled from "styled-components";
import { showUp } from "../../assets/theme/animations";

export const StyledInput = styled.div`
  padding: 0rem 1rem;
  border-radius: 5rem;
  display: grid;
  grid-template-rows: 1fr;
  gap: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.tertiary};
  height: 3rem;
  transition: 300ms;
  
  > input {
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  > input::placeholder {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &:has(input:focus) {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${showUp}
`;
