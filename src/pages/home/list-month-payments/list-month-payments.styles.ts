import styled from "styled-components";
import text from "../../../assets/theme/text";

export const StyledList = styled.div`
  h1 {
    font-size: ${text.fontSize.lg};
    margin-bottom: 1rem;
    display: flex;
    gap: 0.5rem;
  }
`;

export const StyledNoContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
