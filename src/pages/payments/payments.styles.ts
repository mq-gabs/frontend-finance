import styled from "styled-components";
import text from "../../assets/theme/text";
import { showUp } from "../../assets/theme/animations";

export const StyledPayments = styled.main`
  h1 {
    font-size: ${text.fontSize.xl};
    margin-bottom: 1rem;
  }

  .payments-content {
    ${showUp}
  }
`;

export const StyledNoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
