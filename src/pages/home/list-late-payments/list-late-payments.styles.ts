import styled from "styled-components";
import text from "../../../assets/theme/text";

export const StyledListLatePayments = styled.div`
  h1 {
    font-size: ${text.fontSize.lg};
    color: ${({ theme }) => theme.colors.dark};
    margin-bottom: 1rem;
    display: flex;
    gap: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.dark};
    font-size: ${text.fontSize.md};
  }

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledNoContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
