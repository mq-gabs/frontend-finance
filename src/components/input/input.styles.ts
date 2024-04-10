import styled from "styled-components";
import { bright, transition } from "../../assets/theme/animations";

export const StyledInput = styled.div`
  padding: 0rem 1rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-rows: 1fr;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  background: ${({ theme }) => theme.colors.light};
  height: 3rem;
  ${transition}
  &:hover {
    ${bright}
  }
  position: relative;

  > input {
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.dark};
    background: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  > input::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  &:has(input:focus) {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledInputDate = styled.input`
  position: absolute;
  width: 80%;
  margin-left: 1rem;
  height: 100%;
  background: ${({ theme }) => theme.colors.light} !important;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: ${({ theme }) => theme.colors.dark};
    font-weight: 500;
  }
`;
