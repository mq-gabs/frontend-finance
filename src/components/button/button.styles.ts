import styled from "styled-components";
import { TButtonTypes } from ".";
import { bright, transition } from "../../assets/theme/animations";

export const StyledButton = styled.button<{ styledtype: TButtonTypes }>`
  border-radius: 0.5rem;
  padding: 0rem 1rem;
  display: grid;
  grid-template-rows: 1fr;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  height: 3rem;
  align-items: center;
  justify-content: center;

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
        background: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        border: 3px solid ${theme.colors.secondary};

        &:hover {
          ${bright}
        }
      `;
    }

    if (styledType === "tertiary") {
      return `
        background: ${theme.colors.red};
        color: ${theme.colors.light};
        border: 3px solid ${theme.colors.red};

        &:hover {
          ${bright}
        }
      `
    }
  }}
`;
