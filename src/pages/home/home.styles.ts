import styled from "styled-components";
import { boxShadow, showUp } from "../../assets/theme/animations";

export const StyledHome = styled.main`
  background: ${({ theme }) => theme.colors.light};
  height: 100vh;

  display: grid;
  grid-template-areas:
    "filters  filters"
    "list  total"
    "list  other";
  gap: 1rem;

  section {
    padding: 1rem;
    background: ${({ theme }) => theme.colors.light};
    border-radius: 0.5rem;
    ${boxShadow}
    ${showUp}
  }

  .list {
    grid-area: list;
  }

  .total {
    grid-area: total;
  }

  .other {
    grid-area: other;
  }

  .filters {
    grid-area: filters;
  }
`;
