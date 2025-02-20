import styled from "styled-components";
import text from "../../../assets/theme/text";

export const StyledCategoriesCharts = styled.div`
  h2 {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: ${text.fontSize.lg};
    margin-bottom: 1rem;
  }
`;

export const StyledNoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
