import styled from "styled-components";
import { bright } from "../../assets/theme/animations";

export const StyledSelect = styled.select`
  border-radius: 5rem;
  height: 3rem;
  border: 3px solid ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  padding: 0 1rem;
  outline: none;
  width: 100%;
  ${bright}
`;
