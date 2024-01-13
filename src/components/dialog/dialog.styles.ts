import styled from "styled-components";
import { boxShadow } from "../../assets/theme/animations";
import text from "../../assets/theme/text";

export const StyledDialogWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  z-index: 100;
`;

export const StyledDialogBG = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  opacity: 0.4;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const StyledDialogWindow = styled.div`
  width: 500px;
  z-index: 10;
  ${boxShadow}
  border-radius: .5rem;
  display: grid;
  grid-template-rows: 60px auto;
  margin: 1rem;
`;

export const StyledDialogTop = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem 0.5rem 0 0;

  p {
    color: ${({ theme }) => theme.colors.light} !important;
    font-weight: bold;
    font-size: ${text.fontSize.lg} !important;
  }
`;

export const StyledDialogContent = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 5px;
`;
