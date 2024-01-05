import styled from "styled-components";
import { bright } from "../../assets/theme/animations";

export const StyledSelect = styled.select`
  border-radius: 0.5rem;
  height: 3rem;
  border: 3px solid ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  padding: 0 1rem;
  outline: none;
  width: 100%;

  &:hover {
    ${bright}
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.dark};
  }
`;
