import styled from "styled-components";
import { boxShadow, showUp } from "../../assets/theme/animations";

export const StyledHome = styled.main<{ balance_negative: boolean }>`
  background: ${({ theme }) => theme.colors.light};
  height: 100%;

  display: grid;
  grid-template-areas:
  "top top top top-categories top-categories"
  "payments-late payments-late payments-late top-categories top-categories"
  "payments-late payments-late payments-late top-categories top-categories"
  "payments-month payments-month payments-month next-month next-month"
  "payments-month payments-month payments-month next-month next-month";
  "payments-month payments-month payments-month next-month next-month";
  grid-template-rows: 80px auto auto auto auto;
  gap: 1rem;

  section {
    padding: 1rem;
    background: ${({ theme }) => theme.colors.light};
    border-radius: 0.5rem;
    ${boxShadow}
    ${showUp}
  }

  h1, span {
    font-weight: 600;
    font-size: 1.2rem;
  }

  span {
    ${({ theme, balance_negative }) =>
      balance_negative
        ? `
      color: ${theme.colors.red};
    `
        : `
      color: ${theme.colors.green};
    `}
  }

  .top {
    grid-area: top;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .payments-late {
    grid-area: payments-late;
  }

  .payments-month {
    grid-area: payments-month;
  }

  .top-categories {
    grid-area: top-categories;
  }

  .next-month {
    grid-area: next-month;
  }
`;
