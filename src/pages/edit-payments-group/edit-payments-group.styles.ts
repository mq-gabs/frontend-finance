import styled from "styled-components";
import text from "../../assets/theme/text";
import { showUp } from "../../assets/theme/animations";

export const StyledEditPaymentsGroup = styled.main`
  h2 {
    font-size: ${text.fontSize.xl};
    margin-bottom: 1rem;
  }

  ${showUp}
`;

export const StyledEditPaymentsGroupContent = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 1rem) calc(50% - 1rem);
  gap: 2rem;
`;

export const StyledPaymentsList = styled.div`
  h4 {
    font-size: ${text.fontSize.md};
    margin-bottom: 1rem;
  }
`;

export const StyledPaymentsGroupPayments = styled.div`
  h4 {
    font-size: ${text.fontSize.md};
    margin-bottom: 1rem;
  }
`;

export const StyledAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledEmpty = styled.div`
  p {
    text-align: center;
  }
`;

export const StyledTopOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
