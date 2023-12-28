import styled from "styled-components";
import { showUp } from "../../assets/theme/animations";

export const StyledNewPayments = styled.main`
  > form {
    display: grid;
    gap: 0.5rem;
    max-width: 500px;
    margin: 0 auto;
    ${showUp}
  }
`;
