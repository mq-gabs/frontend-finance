import styled from "styled-components";
import { showUp } from "../../assets/theme/animations";

export const StyledInput = styled.div`
  padding: 0rem 1rem;
  border-radius: 5rem;
  display: grid;
  grid-template-rows: 1fr;
  gap: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.bg};
  height: 3rem;

  > input {
    border: none;
    outline: none;
  }

  > input::placeholder {
    color: ${({ theme }) => theme.colors.tertiaryText};
  }

  &:has(input:focus) {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${showUp}
`;
