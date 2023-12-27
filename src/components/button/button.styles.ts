import styled from "styled-components";
import { TButtonTypes } from ".";
import { bright, transition } from "../../assets/theme/animations";

export const StyledButton = styled.button<{ styledtype: TButtonTypes }>`
  border-radius: 5rem;
  padding: 0rem 1rem;
  display: grid;
  grid-template-rows: 1fr;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  height: 3rem;
  align-items: center;
  ${transition}

  ${({ styledtype: styledType, theme }) => {
    if (styledType === "primary") {
      return `
        background: ${theme.colors.primary};
        color: ${theme.colors.light};
        border: 3px solid ${theme.colors.primary};

        &:hover {
          ${bright}
        }
      `;
    }

    if (styledType === "secondary") {
      return `
        background: ${theme.colors.light};
        color: ${theme.colors.primary};
        border: 3px solid ${theme.colors.light};

        &:hover {
          ${bright}
        }
      `;
    }
  }}
`;
