import styled from "styled-components";
import { TColors } from "../../utils";

export const StyledIconButton = styled.button<{
  color: TColors;
  size: number;
}>`
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  width: calc(${({ size }) => size} * 3rem);
  aspect-ratio: 1/1;
  cursor: pointer;
  background: none;

  svg {
    color: ${({ theme, color }) => theme.colors[color]};
    font-size: 1.5rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.lightGrey};
  }
`;
