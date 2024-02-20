import styled from "styled-components";
import { transition } from "../../assets/theme/animations";

export const StyledIconButton = styled.button<{
  size: number;
  disabled: boolean;
}>`
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  width: calc(${({ size }) => size} * 3rem);
  aspect-ratio: 1/1;
  ${({ disabled }) => !disabled && `cursor: pointer;`}
  background: none;

  ${({ disabled, theme }) =>
    !disabled &&
    `
  &:hover {
    background: ${theme.colors.lightGrey};
  }
  `}

  ${transition}
`;
