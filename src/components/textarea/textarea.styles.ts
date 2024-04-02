import styled from "styled-components";
import { bright } from "../../assets/theme/animations";

export const StyledTextarea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    ${bright}
  }

  textarea {
    outline: none;
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    border: 3px solid ${({ theme }) => theme.colors.grey};
    background: ${({ theme }) => theme.colors.light};
    resize: none;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
