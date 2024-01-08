import styled from "styled-components";
import text from "../../../assets/theme/text";

export const StyledList = styled.div`
  h2 {
    font-size: ${text.fontSize.lg};
    margin-bottom: 1rem;
    ${({ theme }) => theme.colors.dark};
  }
`;

export const StyledFormatedCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
