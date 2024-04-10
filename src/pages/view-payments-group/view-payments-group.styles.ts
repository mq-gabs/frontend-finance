import styled from "styled-components";
import text from "../../assets/theme/text";
import { boxShadow, showUp } from "../../assets/theme/animations";

export const StyledViewPaymentsGroup = styled.main`
  h2 {
    font-size: ${text.fontSize.xl};
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  ${showUp}
`;

export const StyledPaymentsBalance = styled.p<{ negative: boolean }>`
  padding: 1rem;
  border-radius: .5rem;
  color: white;
  width: fit-content;
  font-size: 1.2rem;
  ${({ negative, theme }) => negative ? `
    background-color: ${theme.colors.red};
  ` : `
    background-color: ${theme.colors.green};
  `}

  ${boxShadow}
`;