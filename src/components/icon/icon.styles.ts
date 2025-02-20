import styled from "styled-components";
import { TColors } from "../../utils";

export const StyledIcon = styled.div<{ size: number; color: TColors }>`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: calc(${({ size }) => size} * 1.5rem);
    color: ${({ color, theme }) => theme.colors[color]};
  }
`;
