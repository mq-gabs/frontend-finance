import styled from "styled-components";
import { showUp, transition } from "../../assets/theme/animations";

export const StyledInput = styled.div`
  padding: 0rem 1rem;
  border-radius: 5rem;
  display: grid;
  grid-template-rows: 1fr;
  gap: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.grey};
  height: 3rem;
  ${transition}

  > input {
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.dark};
    background: ${({ theme }) => theme.colors.light};
  }

  > input::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  ${showUp}
`;
