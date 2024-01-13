import styled from "styled-components";
import text from "../../../assets/theme/text";

export const StyledPaymentsFilter = styled.div`
  p {
    font-weight: 600;
    font-size: ${text.fontSize.lg};
  }
  margin-bottom: 1rem;
`;

export const StyledFiltersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;
