import styled from "styled-components";
import text from "../../../assets/theme/text";

export const StyledNextMonthPayments = styled.div`
  h2 {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: ${text.fontSize.lg};
  }

  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const StyledNoData = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
