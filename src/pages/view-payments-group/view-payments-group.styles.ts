import styled from "styled-components";
import text from "../../assets/theme/text";
import { showUp } from "../../assets/theme/animations";

export const StyledViewPaymentsGroup = styled.main`
  h2 {
    font-size: ${text.fontSize.xl};
    margin-bottom: 1rem;
  }

  ${showUp}
`;
