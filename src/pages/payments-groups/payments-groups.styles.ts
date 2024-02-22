import styled from "styled-components";
import text from "../../assets/theme/text";
import { showUp } from "../../assets/theme/animations";

export const StyledPaymentsGroups = styled.main`
  h2 {
    font-size: ${text.fontSize.xl};
    margin-bottom: 1rem;
  }

  ${showUp}
`;

export const StyledPaymentsGroupsContent = styled.div`
  display: grid;
  grid-template-columns: calc(30% - 1rem) calc(70% - 1rem);
  gap: 2rem;
`;

export const StyledFormWrapper = styled.div`
  form {
    display: grid;
    gap: 1rem;
  }
`;

export const StyledTableWrapper = styled.div``;

export const StyledEmpty = styled.div`
  p {
    font-size: ${text.fontSize.md};
    text-align: center;
  }
`;
