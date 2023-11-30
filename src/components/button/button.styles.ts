import styled from "styled-components";
import { TButtonTypes } from ".";
import { showUp } from "../../assets/theme/animations";

export const StyledButton = styled.button<{ styledtype: TButtonTypes }>`
  border-radius: 5rem;
  padding: 0rem 1rem;
  display: grid;
  grid-template-rows: 1fr;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 0px 0px 0px ${({ theme }) => theme.colors.bg};
  cursor: pointer;
  outline: none;
  height: 3rem;
  align-items: center;
  transition: 300ms;

  ${({ styledtype: styledType, theme }) => {
    if (styledType === "primary") {
      return `
        background: ${theme.colors.primary};
        color: ${theme.colors.secondaryText};
        border: 3px solid ${theme.colors.primary};

        &:hover {
          background: ${theme.colors.secondary};
        }
      `;
    }

    if (styledType === "secondary") {
      return `
        background: ${theme.colors.secondaryText};
        color: ${theme.colors.primary};
        border: 3px solid ${theme.colors.primary};

        &:hover {
          background: ${theme.colors.secondary};
          color: ${theme.colors.secondaryText};
        }
      `;
    }
  }}

  ${showUp}
`;
